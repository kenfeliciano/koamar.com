import * as React from 'react'
import { useState } from 'react'

export const MenuContext = React.createContext()

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>{children}</MenuContext.Provider>
}
