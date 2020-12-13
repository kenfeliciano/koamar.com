import * as React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../components'

export const DarkToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  if (!theme) {
    return null
  }

  return (
    <button
      type='button'
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      className='block'
    >
      {`${theme === 'light' ? '🌙' : '🌞'}`}
    </button>
  )
}
