/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'rgb(var(--color-ink-950) / <alpha-value>)',
          900: 'rgb(var(--color-ink-900) / <alpha-value>)',
          800: 'rgb(var(--color-ink-800) / <alpha-value>)',
          700: 'rgb(var(--color-ink-700) / <alpha-value>)',
          600: 'rgb(var(--color-ink-600) / <alpha-value>)',
        },
        signal: {
          DEFAULT: '#B58E31',   // Warm Gold from image (#B58E31)
          bright: '#CA9F3B',
          dim: '#987524',
        },
        ember: {
          DEFAULT: '#D6C6A2',   // Warm Sand / Cream from image (#D6C6A2)
          dim: '#BEAC86',
        },
        spark: {
          DEFAULT: '#60697A',   // Steel Slate Blue from image (#60697A)
          bright: '#7A869B',
        },
        mist: {
          900: 'rgb(var(--color-mist-900) / <alpha-value>)',
          700: 'rgb(var(--color-mist-700) / <alpha-value>)',
          500: 'rgb(var(--color-mist-500) / <alpha-value>)',
          100: 'rgb(var(--color-mist-100) / <alpha-value>)',
        },
        palette: {
          sand: '#D6C6A2',      // Warm Sand / Cream
          gold: '#B58E31',      // Warm Gold / Honey
          slateSoft: '#AAADB2', // Soft Slate Gray
          midnight: '#313C52',  // Deep Midnight Navy
          steel: '#60697A',     // Steel Slate Blue
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Fredoka"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        kids: ['"Fredoka"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '9xl':  ['8rem',  { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '8xl':  ['6rem',  { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.03)' },
        }
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
