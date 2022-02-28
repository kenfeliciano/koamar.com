import * as React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  height: 45px;
  width: 155.45px;
`

export const Logo = ({ siteTitle }) => (
  <LogoWrapper>
    <svg
      aria-labelledby={siteTitle}
      title={`${siteTitle} Logo`}
      className='h-10 fill-current'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 38 11'
    >
      <defs />
      <text
        x='.094'
        y='8.977'
        strokeWidth='.265'
        fontFamily='Lato'
        fontSize='10.583'
        fontWeight='400'
        className='text-header'
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
  </LogoWrapper>
)
