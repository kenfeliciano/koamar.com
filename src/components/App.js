import * as React from 'react'
import { ThemeProvider } from '../components'

export const App = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default App
