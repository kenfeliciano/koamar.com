import * as React from 'react'
import { useContext } from 'react'
import tw from 'tailwind-styled-components'

import { MenuContext } from '../components'

const ContentWrapper = tw.div`
  p-4 mx-4 mt-6 bg-container rounded-lg shadow-lg
  ${({ menuOpen, menuShift }) => menuOpen && menuShift && tw`mt-40`}
`

export const Content = ({ menuShift, children }) => {
  const { menuOpen } = useContext(MenuContext)

  return (
    <ContentWrapper menuOpen={menuOpen} menuShift={menuShift}>
      {children}
    </ContentWrapper>
  )
}
