import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLinkButton = styled(Link)`
  /* Structure Only */
`

export const LinkButton = ({ to, children }) => (
  <StyledLinkButton
    to={to}
    className='text-body text-sm p-2 font-bold bg-container hover:bg-surface-main-branded dark:hover:bg-brand-opposite'
  >
    {children}
  </StyledLinkButton>
)

const StyledLinkWrapper = styled.div`
  /* structural styles only */
`

export const LinkWrapper = ({ children }) => (
  <StyledLinkWrapper className='py-12 px-0 flex items-center justify-between mx-4'>
    {children}
  </StyledLinkWrapper>
)
