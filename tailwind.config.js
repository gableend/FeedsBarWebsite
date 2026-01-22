/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FeedBar brand palette
        brand: {
          50: '#F4F5F7',   // Light background
          400: '#8AFF98',  // Light brand green
          900: '#1A1C1F',  // Dark (primary CTA background)
          950: '#0EEF11',  // Brand green (headings, emphasis)
        },
        // Primary accent - blue for links, active states, focus rings only
        accent: {
          DEFAULT: '#4C7DFF',
        },
        // Category colors - for Orb chips/tags only
        category: {
          slate: '#5E6BAA',
          purple: '#7A6FF0',
          blue: '#4C7DFF',
          teal: '#4FA3A5',
          gold: '#C9A24D',
        },
        // Neutral grays for text and borders
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
