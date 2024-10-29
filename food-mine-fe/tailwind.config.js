/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ 
    './apps/**/*.{html,ts}',
    './libs/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      height: {
        'vh-25': '25vh',  
        'vh-50': '50vh',  
        'vh-75': '75vh',  
        'vh-100': '100vh',  
      },
      color: {
        primary: {
          light: '#4CAF50', // color for light mode
          dark: '#81C784',  // color for dark mode
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
          primary: '#bbb680',
          secondary: '#393f0f'
        },
      },
      backgroundColor: {
        light: '#FFFFFF',
        dark: '#121212',
        primary: '#FF5722',
        secondary: '#FFD954'
      },
      backgroundImage: {
        'panda-gradient': 'linear-gradient(to bottom, #FFB74D, #FF9800, #FF5722)'
      },
      text: {
        red: {
          400: '#FF826C'
        },
        green: {
          200: '#92E3CF'
        }
      }
      
    },
  },
  plugins: [],
}

