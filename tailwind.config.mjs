/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en manga japonés
        manga: {
          black: '#0a0a0a',
          'deep-black': '#000000',
          ink: '#1a1a1a',
          'dark-gray': '#2d2d2d',
          'medium-gray': '#6b6b6b',
          'light-gray': '#a8a8a8',
          'paper': '#f5f5f0',
          'cream': '#fffef7',
          white: '#ffffff',
        },
        accent: {
          red: '#d32f2f',
          'blood-red': '#b71c1c',
          'bright-red': '#ff1744',
          'dark-red': '#8b0000',
        },
        tone: {
          'dot-light': '#e8e8e8',
          'dot-medium': '#c4c4c4',
          'dot-dark': '#9e9e9e',
        },
      },
      fontFamily: {
        'manga': ['Impact', 'Haettenschweiler', 'Arial Black', 'sans-serif'],
        'manga-text': ['Arial', 'Helvetica', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      boxShadow: {
        'manga': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'manga-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'manga-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'manga-xl': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'inset-manga': 'inset 3px 3px 0px 0px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'speed-lines': 'speedLines 0.3s ease-out',
        'panel-appear': 'panelAppear 0.5s ease-out',
        'ink-splash': 'inkSplash 0.6s ease-out',
      },
      keyframes: {
        speedLines: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        panelAppear: {
          '0%': { transform: 'scale(0.9)', opacity: '0', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          '100%': { transform: 'scale(1)', opacity: '1', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        inkSplash: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
