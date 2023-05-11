/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg_from: "#142D4B",
        bg_to: "#173A7B",
        sidebar: "#EEF2F3",
        card: "#FCFBFC",
        error: "#D55E5E",
        glass_card: "#2B497E",
        primary: "#020617",
        secondary: "#64748b",
        border: "#8CB2FB",
        divider: "#7F8FA7"
      }
    },
  },
  plugins: [],
}
