// Nashik Explore - Application JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // --- Dark Mode Handler ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const lightIcons = document.querySelectorAll('.theme-toggle-light-icon');
  const darkIcons = document.querySelectorAll('.theme-toggle-dark-icon');
  
  const initTheme = () => {
    const isDarkSaved = localStorage.getItem('color-theme') === 'dark';
    const isSystemDark = !('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isDarkSaved || isSystemDark) {
      document.documentElement.classList.add('dark');
      darkIcons.forEach(icon => icon.classList.remove('hidden'));
      lightIcons.forEach(icon => icon.classList.add('hidden'));
    } else {
      document.documentElement.classList.remove('dark');
      darkIcons.forEach(icon => icon.classList.add('hidden'));
      lightIcons.forEach(icon => icon.classList.remove('hidden'));
    }
  };

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      darkIcons.forEach(icon => icon.classList.add('hidden'));
      lightIcons.forEach(icon => icon.classList.remove('hidden'));
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      darkIcons.forEach(icon => icon.classList.remove('hidden'));
      lightIcons.forEach(icon => icon.classList.add('hidden'));
    }
  };

  themeToggleBtns.forEach(btn => btn.addEventListener('click', toggleTheme));
  initTheme();

  // --- Sticky & Blur Navbar ---
  const navbar = document.getElementById('navbar');
  const checkNavbarScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-md', 'backdrop-blur-md', 'bg-white/80', 'dark:bg-slate-900/80');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('shadow-md', 'backdrop-blur-md', 'bg-white/80', 'dark:bg-slate-900/80');
      navbar.classList.add('bg-transparent');
    }
  };
  window.addEventListener('scroll', checkNavbarScroll);
  checkNavbarScroll();

  // --- Mobile Menu Handler ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu?.querySelectorAll('a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Lazy Loading Images ---
  const lazyImages = document.querySelectorAll('.lazy-image');
  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.addEventListener('load', () => {
            img.classList.remove('shimmer-placeholder');
            img.classList.add('loaded');
          });
        }
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => lazyImageObserver.observe(img));

  // --- Interactive Phone Mockup & Feature Showcase ---
  const featureItems = document.querySelectorAll('.feature-selector-item');
  const phoneScreenshot = document.getElementById('phone-screenshot');

  if (phoneScreenshot && featureItems.length > 0) {
    featureItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active styles from all feature selectors
        featureItems.forEach(f => {
          f.classList.remove('border-sky-500', 'bg-sky-50/10', 'dark:bg-slate-800/20');
          f.classList.add('border-transparent');
        });
        
        // Add active styles to clicked selector
        item.classList.add('border-sky-500', 'bg-sky-50/10', 'dark:bg-slate-800/20');
        item.classList.remove('border-transparent');

        // Fade out image, swap source, fade back in
        const newImgSrc = item.getAttribute('data-screenshot');
        phoneScreenshot.style.opacity = '0';
        setTimeout(() => {
          phoneScreenshot.src = newImgSrc;
          phoneScreenshot.style.opacity = '1';
        }, 200);
      });
    });
  }

  // --- FAQ Accordion ---
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    if (header && content) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all accordion items
        accordionItems.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.accordion-content').style.maxHeight = null;
        });
        
        // If it wasn't active, open it
        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // --- Back To Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Contact Form submission ---
  const contactForm = document.getElementById('contact-form');
  const formSuccessModal = document.getElementById('form-success-modal');
  const closeSuccessModalBtn = document.getElementById('close-success-modal');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const name = contactForm.querySelector('#name')?.value;
      const email = contactForm.querySelector('#email')?.value;
      const message = contactForm.querySelector('#message')?.value;
      
      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }
      
      // Simulate successful form submit
      if (formSuccessModal) {
        formSuccessModal.classList.remove('hidden');
        formSuccessModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
        contactForm.reset();
      } else {
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
      }
    });
  }

  if (closeSuccessModalBtn && formSuccessModal) {
    closeSuccessModalBtn.addEventListener('click', () => {
      formSuccessModal.classList.add('hidden');
      formSuccessModal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    });
  }
});
