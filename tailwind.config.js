/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/line-clamp')],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
};
