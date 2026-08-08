import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f6ff',
          100: '#eeecff',
          500: '#5f4dff',
          600: '#4b3bff',
        },
      },
    },
  },
  plugins: [],
};

export default config;
