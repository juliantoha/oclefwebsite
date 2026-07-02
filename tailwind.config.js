/** @type {import('tailwindcss').Config} */
export default {
  // Compile hover: utilities inside @media (hover:hover) so taps on touch
  // devices don't leave cards stuck in their hover state.
  future: { hoverOnlyWhenSupported: true },
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
