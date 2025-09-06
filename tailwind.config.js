/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbd5d5',
          300: '#f8b3b3',
          400: '#f48585',
          500: '#f0a0a0',
          600: '#e67a7a',
          700: '#d95a5a',
          800: '#c44a4a',
          900: '#a13d3d',
        },
        accent: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
          foreground: 'hsl(var(--color-foreground))',
        },
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-border))',
        ring: 'hsl(var(--color-primary))',
        card: {
          DEFAULT: 'hsl(var(--color-background))',
          foreground: 'hsl(var(--color-foreground))',
        },
        'primary-foreground': 'hsl(var(--color-background))',
        'secondary-foreground': 'hsl(var(--color-foreground))',
        'accent-foreground': 'hsl(var(--color-foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
