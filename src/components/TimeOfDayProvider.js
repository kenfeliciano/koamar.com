import * as React from 'react'
import { useState, useEffect } from 'react'

export const TimeOfDayContext = React.createContext()

export const TimeOfDayProvider = ({ children }) => {
  const [timeOfDay, rawSetTimeOfDay] = useState(undefined)
  useEffect(() => {
    const root = window.document.documentElement
    const initialTimeOfDay = root.getAttribute('timeOfDay')
    rawSetTimeOfDay(initialTimeOfDay)
  }, [])

  const setTimeOfDay = (value) => {
    rawSetTimeOfDay(value)
  }

  return <TimeOfDayContext.Provider value={{ timeOfDay, setTimeOfDay }}>{children}</TimeOfDayContext.Provider>
}
