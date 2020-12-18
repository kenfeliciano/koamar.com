import * as React from 'react'
import { ThemeProvider } from '../components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font: 112.5%/1.45em georgia, serif, sans-serif;
  }
  body {
    background-color: var(--background);
    color: text-body;
    font-family: georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
  }
  h1 {
    color: var(--text-header);
    font-size: 2.25rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 1.45rem;
  }
  h2 {
    margin-bottom: 1.45rem;
    color: var(--text-header);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-weight: bold;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  ul, ol {
    margin-left: 1.45rem;
    margin-bottom: 1.45rem;
    list-style-position: outside;
  }
  ul {
    list-style-type: disc;
  }
  p {
    margin-bottom: 1.45rem;
    color: var(--text-body);
  }
  hr{
    box-sizing: content-box;
    overflow: visible;
    margin-bottom: 1.45rem;
  }
`

export const App = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
