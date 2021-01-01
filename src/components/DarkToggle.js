import * as React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../components'

export const DarkToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  if (!theme) {
    return null
  }

  return (
    <div className='hover:bg-opposite sm:hover:bg-container sm:ml-2'>
      <button
        type='button'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
        className='sm:block flex justify-between items-center w-full pr-6 sm:pr-0'
      >
        <span className='block sm:hidden px-2 py-1 font-semibold rounded hover:bg-opposite'> Toggle Theme </span>
        <span className='block sm:inline-block sm:py-1'>{`${theme === 'light' ? '🌙' : '🌞'}`}</span>
      </button>
    </div>
  )
}
