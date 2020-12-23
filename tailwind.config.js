module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['lato'],
      serif: ['open sans'],
      mono: ['fira code'],
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        surface: 'var(--surface)',
        container: 'var(--container)',
        brandedSurface: 'var(--branded-surface)',
        body: 'var(--text-body)',
        header: 'var(--text-header)',
        link: 'var(--link)',
        muted: 'var(--muted)',
        disabled: 'var(--disabled)',
        codeTitleContainer: 'var(--code-title-background)',
        codeTitle: 'var(--code-title-text)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
