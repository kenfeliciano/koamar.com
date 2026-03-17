module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './content/**/*.{md,mdx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['lato'],
        serif: ['open sans'],
        mono: ['fira code'],
      },
      colors: {
        primary: 'var(--primary)',
        opposite: 'var(--opposite)',
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

        'surface-main-branded': 'var(--branded-surface)',
        'surface-main-container': 'var(--container)',
        'surface-branded': 'var(--branded-surface)',
        'brand-opposite': 'var(--opposite)',

        hero: 'var(--hero-bg)',
      },
    },
  },
}
