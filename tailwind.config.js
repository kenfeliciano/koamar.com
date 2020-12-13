module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        surface: 'var(--surface)',
        container: 'var(--container)',
        brandedSurface: 'var(--branded-surface)',
        text: 'var(--text)',
        header: 'var(--text-header)',
        link: 'var(--link)',
        muted: 'var(--muted)',
        disabled: 'var(--disabled)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
