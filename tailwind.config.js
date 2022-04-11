/* eslint-disable import/no-extraneous-dependencies */

const defaultTheme = require('tailwindcss/defaultTheme');
const fluidType = require('tailwindcss-fluid-type');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const tailwindConfig = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layouts/**/*.{ts,tsx}',
  ],
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    fluidType,
    ({ addBase, theme }) => {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
  theme: {
    extend: {
      fluidType: {
        settings: {
          fontSizeMin: 1,
          fontSizeMax: 1,
        },
      },
      borderWidth: {
        1: '1px',
      },
    },
    colors: {
      primary: {
        50: '#E5FFF6',
        100: '#CCFFEC',
        200: '#99FFDA',
        300: '#66FFC7',
        400: '#33FFB4',
        500: '#00FFA2',
        600: '#00CC81',
        700: '#009961',
        800: '#006641',
        900: '#003320',
      },
      neutral: {
        50: '#EEF3F7',
        100: '#DDE6EE',
        200: '#BACDDE',
        300: '#98B4CD',
        400: '#769BBC',
        500: '#101921',
        600: '#436889',
        700: '#324E67',
        800: '#213445',
        900: '#111A22',
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      error: {
        50: '#FFE6EB',
        100: '#FECDD7',
        200: '#FE9AB0',
        300: '#FD6888',
        400: '#FD3560',
        500: '#C3022C',
        600: '#CA022D',
        700: '#970222',
        800: '#650117',
        900: '#32010B',
      },
      info: {
        50: '#E6EEFE',
        100: '#CEDEFD',
        200: '#9DBCFB',
        300: '#6B9BFA',
        400: '#3A79F8',
        500: '#1E66F7',
        600: '#0746C5',
        700: '#053594',
        800: '#042362',
        900: '#021231',
      },
    },
    fontFamily: {
      sans: [
        'Poppins', // FIXME: Remove this font when UI implementation was completed
        'DanaVF',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
};

module.exports = tailwindConfig;
