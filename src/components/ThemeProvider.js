import * as React from 'react'
import { useState, useEffect } from 'react'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState(undefined)
  useEffect(() => {
    const root = window.document.documentElement
    const initialTheme = root.style.getPropertyValue('--initial-theme')
    rawSetTheme(initialTheme)
  }, [])

  const setTheme = (value) => {
    rawSetTheme(value)

    window.localStorage.setItem('theme', value)
    window.document.documentElement.className = value
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
