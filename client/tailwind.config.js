const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222.2, 47.4%, 11.2%)',
        muted: 'hsl(210, 40%, 96.1%)',
        'muted-foreground': 'hsl(215.4, 16.3%, 46.9%)',
        border: 'hsl(214.3, 31.8%, 91.4%)',
        card: 'hsl(0, 0%, 100%)',
        primary: 'hsl(222.2, 47.4%, 11.2%)',
        'primary-foreground': 'hsl(210, 40%, 98%)',
        dark: {
          background: 'hsl(224, 71%, 4%)',
          foreground: 'hsl(213, 31%, 91%)',
        },
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'neumorphism': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
