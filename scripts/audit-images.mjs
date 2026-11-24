import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();

console.log('--- Image Audit Starting ---');

// 1. Verify all WebP images in public/images/destinations and public/images/trivio
const WEBP_DIRS = ['public/images/destinations', 'public/images/trivio'];
const webpFiles = [];
let webpErrors = 0;

for (const dir of WEBP_DIRS) {
  const fullDir = path.join(ROOT_DIR, dir);
  if (!fs.existsSync(fullDir)) {
    console.error(`Directory missing: ${dir}`);
    webpErrors++;
    continue;
  }
  for (const f of fs.readdirSync(fullDir)) {
    const filePath = path.join(fullDir, f);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && f.endsWith('.webp')) {
      const buf = Buffer.alloc(12);
      const fd = fs.openSync(filePath, 'r');
      fs.readSync(fd, buf, 0, 12, 0);
      fs.closeSync(fd);
      const isRiff = buf.toString('ascii', 0, 4) === 'RIFF';
      const isWebp = buf.toString('ascii', 8, 12) === 'WEBP';
      if (!isRiff || !isWebp) {
        console.error(`Invalid WebP magic bytes: ${filePath}`);
        webpErrors++;
      }
      if (stat.size <= 1024) {
        console.error(`WebP image <= 1KB: ${filePath} (${stat.size} bytes)`);
        webpErrors++;
      }
      webpFiles.push({
        relativePath: '/' + path.relative(path.join(ROOT_DIR, 'public'), filePath),
        fileName: f,
        sizeKb: (stat.size / 1024).toFixed(1),
        bytes: stat.size,
      });
    }
  }
}

console.log(`Validated ${webpFiles.length} WebP images. WebP errors: ${webpErrors}`);

// 2. Search for hotlinked images across entire repo (src/, public/, docs/)
function walk(dir, extFilter) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full, extFilter));
    } else if (!extFilter || extFilter.test(item)) {
      results.push(full);
    }
  }
  return results;
}

const codeFiles = walk(path.join(ROOT_DIR, 'src'), /\.(tsx|ts|js|jsx|json|css|md)$/);
const hotlinkRegex = /https?:\/\/[^\s"'`)]+\.(png|jpg|jpeg|webp|gif|svg|avif)/gi;
let hotlinkCount = 0;

for (const file of codeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = hotlinkRegex.exec(content)) !== null) {
    // If it is from own canonical domain or schema.org, ignore
    if (match[0].includes('nashik.sooubh.in') || match[0].includes('schema.org')) continue;
    console.warn(`Potential hotlink in ${path.relative(ROOT_DIR, file)}: ${match[0]}`);
    hotlinkCount++;
  }
}

console.log(`Hotlinked images found: ${hotlinkCount}`);

// 3. Alt text check in src/
const tsxFiles = walk(path.join(ROOT_DIR, 'src'), /\.(tsx|jsx)$/);
let missingAlt = 0;
let emptyAlt = 0;

for (const file of tsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Match <Image or <img
  const tagRegex = /<(Image|img)\b([^>]*?)(\/?>)/gs;
  let match;
  while ((match = tagRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const attrs = match[2];
    const relFile = path.relative(ROOT_DIR, file);

    if (!attrs.includes('alt=')) {
      console.error(`Missing alt attribute in ${relFile}: ${fullTag.replace(/\s+/g, ' ').slice(0, 100)}`);
      missingAlt++;
    } else {
      // Check if alt is literally empty string like alt="" or alt={""}
      // Note: aria-hidden="true" might intentionally have alt=""
      const emptyMatch = attrs.match(/alt=(["'`]\s*["'`]|\{\s*["'`]\s*["'`]\s*\})/);
      if (emptyMatch && !attrs.includes('aria-hidden="true"')) {
        console.warn(`Empty alt attribute without aria-hidden in ${relFile}: ${fullTag.replace(/\s+/g, ' ').slice(0, 100)}`);
        emptyAlt++;
      }
    }
  }
}

console.log(`Missing alt: ${missingAlt}, Empty alt: ${emptyAlt}`);

// 4. Check docs/image-licenses.md against all webpFiles
const licensePath = path.join(ROOT_DIR, 'docs/image-licenses.md');
const licenseContent = fs.readFileSync(licensePath, 'utf8');
let missingInLicense = [];

for (const webp of webpFiles) {
  if (!licenseContent.includes(webp.relativePath)) {
    missingInLicense.push(webp.relativePath);
  }
}

console.log(`Webp files missing from docs/image-licenses.md: ${missingInLicense.length}`);
if (missingInLicense.length > 0) {
  console.log('Missing:', missingInLicense);
}

// 5. Check all data entries heroImage
const destDataPath = path.join(ROOT_DIR, 'src/data/destinationsData.ts');
const guidesDataPath = path.join(ROOT_DIR, 'src/data/guidesData.ts');
const blogDataPath = path.join(ROOT_DIR, 'src/data/blogData.ts');

function checkHeroImages(filePath, name) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/heroImage:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  console.log(`Found ${matches.length} heroImage entries in ${name}`);
  for (const img of matches) {
    const diskPath = path.join(ROOT_DIR, 'public', img.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      console.error(`Hero image missing on disk: ${img} in ${name}`);
    } else {
      const size = fs.statSync(diskPath).size;
      if (size <= 1024) {
        console.error(`Hero image <= 1KB: ${img} (${size} bytes)`);
      }
    }
  }
}

checkHeroImages(destDataPath, 'destinationsData.ts');
checkHeroImages(guidesDataPath, 'guidesData.ts');
checkHeroImages(blogDataPath, 'blogData.ts');
