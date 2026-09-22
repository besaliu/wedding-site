/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EBE2D4',
        },
        sand: {
          50: '#FBF9F5',
          100: '#F5EFE6',
          200: '#E9DECEDB',
          300: '#D9C8B0',
          400: '#C4AE90',
          500: '#A98F70',
          600: '#8C7456',
          700: '#6C5840',
          800: '#4D3E2D',
          900: '#32281D',
        },
        neutral: {
          earth: '#4A3F35',
          charcoal: '#2D2721',
          taupe: '#8C7A6B',
          softgray: '#A3998E',
          divider: '#E8DFD1',
        },
        champagne: {
          light: '#F8F4EE',
          gold: '#C5A880',
          dark: '#A68860',
        },
        sage: {
          light: '#EBF0E8',
          default: '#7C8A76',
          dark: '#586552',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(74, 63, 53, 0.06)',
        'soft-hover': '0 20px 40px -10px rgba(74, 63, 53, 0.12)',
        'card': '0 4px 20px -2px rgba(74, 63, 53, 0.04)',
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
