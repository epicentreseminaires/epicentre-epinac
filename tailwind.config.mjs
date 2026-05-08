/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Neutres
        ink: {
          DEFAULT: '#0B0B0F',
          soft: '#161620',
          muted: '#5A5A6A',
        },
        bone: {
          DEFAULT: '#F5F1EA',
          soft: '#EFEAE0',
        },
        // Brand (logo, favicon, signature)
        forest: {
          DEFAULT: '#00491b',
          deep: '#003707',
        },
        // Accent : vert brand (remplace l'or, palette unifiée)
        accent: {
          DEFAULT: '#00491b',
          dark: '#003707',
        },
        // Zone Épinac (Bourgogne, nature) — alignée brand
        epinac: {
          DEFAULT: '#0E3217',
          deep: '#003707',
        },
        // Zone Plaine de l'Ain (industriel) — différenciée
        plaine: {
          DEFAULT: '#1B2A4A',
          deep: '#0F1B33',
        },
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #003707 0%, #00491b 100%)',
        'forest-gradient-soft': 'linear-gradient(135deg, #003707 0%, #0E3217 100%)',
      },
      fontFamily: {
        display: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      maxWidth: {
        wide: '1400px',
      },
    },
  },
  plugins: [],
};
