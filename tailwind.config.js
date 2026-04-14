/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          50:  '#f5f9ee',
          100: '#e8f2d5',
          200: '#d0e5ac',
          300: '#afd07a',
          400: '#8db84f',
          500: '#6d9b32',
          600: '#537c25',
          700: '#406020',
          800: '#354e1e',
          900: '#2e431c',
        },
        cider: {
          50:  '#fdf8ee',
          100: '#f9edcc',
          200: '#f3d98a',
          300: '#ecc14e',
          400: '#e6a82a',
          500: '#d98b17',
          600: '#be6b12',
          700: '#9d4d13',
          800: '#803e15',
          900: '#6b3314',
        },
        bark: {
          50:  '#f7f5f0',
          100: '#ede8dd',
          200: '#ddd3bd',
          300: '#c8b896',
          400: '#b29c73',
          500: '#9e8559',
          600: '#88704a',
          700: '#6f5a3d',
          800: '#5c4b36',
          900: '#4d3f2f',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
