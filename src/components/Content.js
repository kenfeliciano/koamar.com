import * as React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'

import { MenuContext } from '../components'

const ContentWrapper = styled.div.attrs((props) => ({
  className: `p-4 mx-4 ${props.shiftClass} ${props.className || ''}`,
}))`
  border-radius: 0.5rem; /* rounded-lg */
  background: var(--container); /* bg-container */
  box-shadow: var(--shadow-lg); /* shadow-lg */
`

export const Content = ({ menuShift, children, className }) => {
  const { menuOpen } = useContext(MenuContext)
  const shiftClass = menuOpen && menuShift ? 'mt-40' : 'mt-6'

  return (
    <ContentWrapper shiftClass={shiftClass} className={className}>
      {children}
    </ContentWrapper>
  )
}
