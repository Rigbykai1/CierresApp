/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'Theme1': {
          'primary': '#808080',
          'primary-focus': '#737373',
          'primary-content': '#f2f2f3',

          'secondary': '#4d4d4d',
          'secondary-focus': '#404040',
          'secondary-content': '#f2f2f3',

          'accent': '#1a1a1a',
          'accent-focus': '#0d0d0d',
          'accent-content': '#f2f2f3',

          'neutral': '#f2f2f3',
          'neutral-focus': '#e4e4e7',
          'neutral-content': '#4d4d4d',

          'base-100': '#ffffff',
          'base-200': '#ffffff',
          'base-300': '#ffffff',
          'base-content': '#7d7d7d',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',

          '--animation-btn': '0',
          '--animation-input': '0',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        'Theme2': {
          'primary': '#ffffff',
          'primary-focus': '#e6e6e6',
          'primary-content': '#000000',

          'secondary': '#152747',
          'secondary-focus': '#091120',
          'secondary-content': '#ffffff',

          'accent': '#503447',
          'accent-focus': '#32202c',
          'accent-content': '#ffffff',

          'neutral': '#171618',
          'neutral-focus': '#2e2d2f',
          'neutral-content': '#dca54c',

          'base-100': '#070708',
          'base-200': '#171618',
          'base-300': '#2e2d2f',
          'base-content': '#dca54c',

          'info': '#66c7ff',
          'success': '#87cf3a',
          'warning': '#e1d460',
          'error': '#ff6b6b',

          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',

          '--animation-btn': '0',
          '--animation-input': '0',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
}