/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        din: ['din'],
        sans: ['sans-serif'],
        basier: ['basier'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bg': '#F4EDF4',
        'primary': '#CAA5C7',
        'secondary': '#F8D07B',
        'alt': '#B9DBE7',
        'highlight': 'F4ACAD',
        'white': '#F7F3F9',
        'black': '#2E262E',
      },
      backgroundImage: {
        'watermark': "url('/watermark.svg')",
      },
      keyframes: {
        wiggle: {
          '0%-60%': { transform: 'rotate(0) scale(1)' },
          '75%': { transform: 'rotate(0) scale(1.12)' },
          '80%': { transform: 'rotate(0) scale(1.1)' },
          '84%': { transform: 'rotate(-10deg) scale(1.1)' },
          '88%': { transform: 'rotate(10deg) scale(1.1)' },
          '92%': { transform: 'rotate(-10deg) scale(1.1)' },
          '96%': { transform: 'rotate(10deg) scale(1.1)' },
          '100%': { transform: 'rotate(0) scale(1)' },
        },
        flip: {
          '0%-50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        heart: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '20%': { opacity: '1', transform: 'translateY(0,-10%) scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.5)' },
        },
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeindown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeintop: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeinright: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '80%': { opacity: '1', transform: 'translateY(0)' },
          '90%': { opacity: '1', transform: 'translateX(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeinleft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeout: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s 1s',
        flip: 'flip .7s',
        heart: 'heart 1.5s ease-in-out',
        fadein: 'fadein .5s ease-in',
        fadeindown: 'fadeindown 1s ease-in',
        fadeintop: 'fadeintop 1s ease-in',
        fadeinright: 'fadeinright .5s ease-in',
        fadeinleft: 'fadeinleft 1.5s ease-in',
        fadeout: 'fadeout 2s',
      },
      screens: {
        '3xl': '1600px',
      },
    },
    variants: {
      extend: {
        fontFamily: ['hover', 'focus'],
      },
    },
    plugins: [
       require('@tailwindcss/line-clamp'),
       require('@tailwindcss/aspect-ratio'),
    ],
    corePlugins: {
      fontFamily: true,
    },
  },
};
