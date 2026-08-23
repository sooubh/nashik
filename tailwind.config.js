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
        brand: {
          50: '#F4F9FF',
          100: '#E8F2FE',
          200: '#CBE2FD',
          300: '#9EC9FC',
          400: '#5BA4F9',
          500: '#2582F6',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003E99',
          900: '#002B6B',
          950: '#001940',
          blue: '#0066FF',
          secondary: '#0052CC',
          sky: '#0099FF',
          light: '#BAE6FD',
        },
        slate: {
          850: '#0E1726',
          900: '#0B111E',
          950: '#060A12',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(0, 102, 255, 0.25)',
        'glow-md': '0 0 35px -5px rgba(0, 102, 255, 0.35)',
        'glow-lg': '0 0 60px -10px rgba(0, 102, 255, 0.45)',
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 22px 45px -10px rgba(0, 102, 255, 0.12), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
