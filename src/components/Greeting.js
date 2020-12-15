import * as React from 'react'
import { useContext } from 'react'
import { TimeOfDayContext } from '../components'

export const Greeting = () => {
  const { timeOfDay, setTimeOfDay } = useContext(TimeOfDayContext)

  const calcTimeOfDay = () => {
    const today = new Date()

    // This should still give me the correct time in another country right?
    // I just want to be able to read what it returns!
    const currentHour = today.toLocaleTimeString('pt-PT').slice(0, 2)

    // Starting with a simple implementation without regard to sunrise / sunset
    // It would be nice if it took that into account

    switch (true) {
      case currentHour < '12':
        return 'morning'
      case currentHour < '18':
        return 'afternoon'
      case currentHour <= '22':
        return 'evening'
      default:
        return 'night'
    }
  }

  const calcTOD = calcTimeOfDay()
  if (timeOfDay !== calcTOD) {
    setTimeOfDay(calcTOD)
  }

  return <h1 className='mt-2'>Good {timeOfDay} everyone,</h1>
}
