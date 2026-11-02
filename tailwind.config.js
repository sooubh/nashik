/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34146c',
        'deep-violet': '#4B2E83',
        'mist-lilac': '#B9A9D8',
        paper: '#FBFAFD',
        'signal-lime': '#C6F432',
        'on-surface': '#1A1C1E',
        'on-surface-variant': '#494551',
        outline: '#7B7582',
        'outline-variant': '#CBC4D2',
        brand: {
          50: '#F4F1F8',
          100: '#E8E1F1',
          200: '#D5C7E5',
          300: '#B9A9D8',
          400: '#8A6FB9',
          500: '#6B4EA4',
          600: '#4B2E83',
          700: '#34146C',
          800: '#25005A',
          900: '#1A003E',
        },
      },
      fontFamily: {
        sans: ['var(--font-bricolage)', 'Bricolage Grotesque', 'sans-serif'],
        editorial: ['var(--font-newsreader)', 'Newsreader', 'serif'],
      },
      borderRadius: {
        frame: '28px',
        card: '20px',
      },
    },
  },
  plugins: [],
};
