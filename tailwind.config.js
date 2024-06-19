/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundColor: {
        's-gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4d4d4d',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
      },

      'gothic': {
        '50': '#f4f7f7',
        '100': '#e3e9ea',
        '200': '#cad5d8',
        '300': '#a4b7bc',
        '400': '#7b949b',
        '500': '#5c767e',
        '600': '#4f636b',
        '700': '#455359',
        '800': '#3d484d',
        '900': '#363e43',
        '950': '#21272b',
    },
    
      
      },
      textColor: {
        's-gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4d4d4d',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
      },
      
        'gothic': {
          '50': '#f4f7f7',
          '100': '#e3e9ea',
          '200': '#cad5d8',
          '300': '#a4b7bc',
          '400': '#7b949b',
          '500': '#5c767e',
          '600': '#4f636b',
          '700': '#455359',
          '800': '#3d484d',
          '900': '#363e43',
          '950': '#21272b',
      },
      
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
