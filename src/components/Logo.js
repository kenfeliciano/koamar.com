import * as React from 'react'

export const Logo = ({ siteTitle }) => (
  <svg
    aria-labelledby={siteTitle}
    title={`${siteTitle} Logo`}
    className='fill-current h-10'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 38 11'
  >
    <defs />
    <text
      x='.094'
      y='8.977'
      stroke-width='.265'
      font-family='Lato'
      font-size='10.583'
      font-weight='400'
      class='text-header'
      style={{
        lineHeight: 1.25,
        fontVariantLigatures: 'normal',
        fontVariantCaps: 'normal',
        fontVariantNumeric: 'normal',
        fontVariantEastAsian: 'normal',
      }}
    >
      <tspan
        x='.094'
        y='8.977'
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: 'normal',
          fontVariantCaps: 'normal',
          fontVariantNumeric: 'normal',
          fontVariantEastAsian: 'normal',
        }}
      >
        KoaMar
      </tspan>
    </text>
    <path className='text-primary' d='M13 10.3 L 32.5,10.1 L 32.5, 10.5 z' />
  </svg>
)
