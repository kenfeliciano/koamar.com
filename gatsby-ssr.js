import * as React from 'react'
import { App } from './src/components'

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      function getInitialTheme() {
        const persistedColorPreference = window.localStorage.getItem('theme')
        const hasPersistedPreference = typeof persistedColorPreference === 'string'
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedColorPreference
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        const hasMediaQueryPreference = typeof mql.matches === 'boolean'
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light'
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return 'light'
      }

      function getTimeOfDay() {
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

      const theme = getInitialTheme()
      
      const root = document.documentElement
      root.className = theme      
      root.style.setProperty('--initial-theme', theme)    

      const timeOfDay = getTimeOfDay()      
      root.setAttribute('timeOfDay', timeOfDay)

    })()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
