/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pg-bg':        '#0A080F',
        'pg-surface':   '#0E0820',
        'pg-surface2':  '#160A2E',
        'pg-border':    '#2A1050',
        'pg-border2':   '#3A1870',
        'pg-violet':    '#8B4CFF',
        'pg-violet2':   '#6030A0',
        'pg-violet3':   '#3A1870',
        'pg-gold':      '#F5C842',
        'pg-gold2':     '#C8A030',
        'pg-gold3':     '#6A4800',
        'pg-teal':      '#2DD4B0',
        'pg-coral':     '#FF7050',
        'pg-text':      '#E8E0FF',
        'pg-text2':     '#B8A0D8',
        'pg-text3':     '#6040A0',
        'pg-muted':     '#2A1050',
      },
     fontFamily: {
  'chakra':   ['Chakra Petch', 'sans-serif'],
  'rajdhani': ['Rajdhani', 'sans-serif'],
  'mono':     ['Share Tech Mono', 'monospace'],
},
    },
  },
  plugins: [],
}