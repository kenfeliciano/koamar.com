import * as React from 'react'
import styled from 'styled-components'

const HamburgerWrapper = styled.div`
  height: 45px;
  width: 45px;
`

export const Hamburger = () => (
  <HamburgerWrapper>
    <svg class='h-6 w-6 fill-current' viewBox='0 0 24 24'>
      <path
        fill-rule='evenodd'
        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
      />
    </svg>
  </HamburgerWrapper>
)
