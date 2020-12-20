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
    font: 112.5%/1.5em georgia, serif, sans-serif;
  }
  body {
    background-color: var(--background);
    color: var(--text-body);
    font-family: open sans, georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
  }
  h1 {
    color: var(--text-header);
    font-size: 2.25rem;
    font-family: lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
    font-weight: bold;
    line-height: 1;
    margin-top: 1.5rem;
    &:first-child {
      margin-top: 0;
    }
  }
  h2 {
    margin-top: 1.5rem;
    color: var(--text-header);
    font-family: lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1;    
    &:first-child {
      margin-top: 0;
    }
  }
  ul, ol {
    margin-left: 1.5rem;
    margin-top: 1.5rem;
    list-style-position: outside;
  }
  ul {
    list-style-type: disc;
  }
  p {
    margin-top: 1.5rem;
    color: var(--text-body);    
    &:first-child {
      margin-top: 0;
    }
  }
  .border-gradient {
    border-image-source: linear-gradient(to right, var(--primary) 0%, var(--link) 76%);
    border-image-slice: 0 0 100 0;
  }

  .border-fadeaway {
    border-image-source: linear-gradient(to right, var(--primary) 0%, var(--link) 76%, transparent 100%);
    border-image-slice: 0 0 100 0;
  }

  .inline-link {
    color: inherit;
    font-weight: 700;
    text-decoration: none; 
  }

  .standalone-link {
    color: inherit;
    font-weight: 700;
    text-decoration: none;
  }

  .standalone-link:hover {
    color: var(--primary);
  }
  .standalone-link:focus {
    color: var(--primary);
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
