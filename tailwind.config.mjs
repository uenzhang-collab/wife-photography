/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        warm: '#fdfbf7',
        text: '#3e362e',
        accent: '#b8860b',
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
