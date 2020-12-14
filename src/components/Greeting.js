import * as React from 'react'

export const Greeting = () => {
  const today = new Date()

  // This should still give me the correct time in another country right?
  // I just want to be able to read what it returns!
  const currentHour = today.toLocaleTimeString('pt-PT').slice(0, 2)

  // Starting with a simple implementation without regard to sunrise / sunset
  // It would be nice if it took that into account
  const timeOfDay = () => {
    switch (true) {
      case currentHour < '12':
        return 'morning'
      case currentHour < '18':
        return 'afternoon'
      case currentHour <= '24':
        return 'evening'
      default:
        return 'night'
    }
  }

  return <h1 className='mt-2'>Good {timeOfDay()} everyone,</h1>
}
