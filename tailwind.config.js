/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e293b',
          light: '#334155',
          dark: '#0f172a',
        },
        accent: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },

  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1e293b',
          secondary: '#334155',
          accent: '#ffffff',
          neutral: '#f3f4f6',
          'base-100': '#ffffff',
          info: '#38bdf8',
          success: '#22d3ee',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },
      'dark',
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
  },
}
