import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '20px',
        xl: '30px',
        '2xl': '60px',
      },
    },
    screens: {
      /**
       * The Screen Resolutions Below SM are:
       * 360×640 – 12.98%
       * 414×896 – 7.82%
       * 375×667 – 6.65%
       * 360×780 – 6.02%
       * 360×760 – 5.27%
       * 375×812 – 5.15%
       *
       * The SM is Horizontal Rotated Mobile
       * MD is Tablet
       * LG-7XL are Laptop and Desktop Screens
       */

      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1359px' },
      '2xl': { min: '1360px', max: '1439px' },
      '3xl': { min: '1440px', max: '1535px' },
      '4xl': { min: '1536px', max: '1920px' },
      '5xl': { min: '1920px', max: '2559px' },
      '6xl': { min: '2560px', max: '3839px' },
      '7xl': { min: '3840px' },
    },
    extend: {},
  },
  plugins: [],
};
export default config;

