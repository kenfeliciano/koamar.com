import * as React from 'react'
import { ThemeProvider, TimeOfDayProvider } from '../components'

export const App = ({ children }) => {
  return (
    <ThemeProvider>
      <TimeOfDayProvider>{children}</TimeOfDayProvider>
    </ThemeProvider>
  )
}

export default App
