/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          700: '#FFFFFF',
        },
        black: {
          700: '#171717',
        },
        gray: {
          100: '#F4F4F4',
          200: '#D3D3D3',
          300: '#A5A5A5',
          400: '#878787',
          500: '#5E5E5E',
          600: '#3A3A3A',
        },
        detail: {
          blue: '#273BF4',
          'blue-hover': '#2510A7',
        },
      },
    },
  },
  plugins: [],
};
