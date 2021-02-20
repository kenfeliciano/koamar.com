import * as React from 'react'
import { App } from './src/components'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { Table, Code, MarkdownLink, Primary, Danger, Warning, Success, Info } from './src/components'
import './src/styles/code-layout.css'

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
    
      const theme = getInitialTheme()
      
      const root = document.documentElement
      root.className = theme      
      root.style.setProperty('--initial-theme', theme)
    })()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}

const components = {
  table: Table,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  a: (props) => <MarkdownLink {...props} />,
  wrapper: ({ children }) => <>{children}</>,
  Primary,
  Danger,
  Warning,
  Success,
  Info,
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <App>{element}</App>
    </MDXProvider>
  )
}
