/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'lightGray' : '#727A82', // Gray text color
        'lightGrayButton' : '#F3F3F4',//Gray buttons
        'midGray' : '#F5F5F7', // Background color
        'borderGray' : '#EAEAEB', // Border color
        'greenButton' : '#1A8917', // Green buttons
        'darkButton' : '#323329', // Dark buttons
        'greenText' : '#327F37', // Green text 
        'lightGreen' : '#1A8917', // Light green text for active tabs
        'activeGreen' : '#2FA837',
        'lightGreenIcons': '#F2F6EC',
        'grayBorder': '#E0E2E7',
        'borderBlue': '#2F69FF',
        'backgroundBlue': '#2F69FF0A',
        'lightBlack' : '#292D33', // Main black color
        'progress' : '#2f69ff0a', //Color of progress bar
      }
    },
  },
  plugins: [],
}
