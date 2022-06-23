import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../components'
import SheetMusic from '@slnsw/react-sheet-music'

export const Music = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return <SheetMusic notation={children} />
}
