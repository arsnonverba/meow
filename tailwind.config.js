/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        abhayalibre: ['abhayalibre'],
        sans: ['sans-serif'],
        nunito: ['nunito'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bg': '#F9F1FD',
        'primary': '#9007E0',
        'secondary': '#B106B8',
        'alt': '#D6048A',
        'white': '#FFFFFF',
        'black': '#1D012E',
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
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeindown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeinright: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
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
        fadein: 'fadein .5s ease-in',
        fadeindown: 'fadeindown 1s ease-in',
        fadeinright: 'fadeinright 1.5s ease-in',
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
