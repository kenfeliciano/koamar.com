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
    overflow-y: scroll;
  }
  body {
    background-color: var(--background);
    color: var(--text-body);
    font-family: open sans, georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-size: 1rem;    
  }
  h1,h2,h3,h4,h5,h6 {
    color: var(--text-header);
    font-family: lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
    margin-top: 1.5rem;
    &:first-child {
      margin-top: 0;
    }
  }
  h1 {    
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 2.5rem;    
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.75rem;        
  }
  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.625rem;        
  }
  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.5rem;        
  }
  h5 {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.375rem;        
  }
  
  /* If definitions are used - must be in HTML, Mdx does not support */
  h6, dt {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.25rem;        
  }
  dt {
    margin-top: 1.25rem;
  }
  ul, ol {
    margin: 1rem 0 1rem 2rem;
    list-style-position: outside;
  }
  ul {
    list-style-type: disc;    
  }

  /* Outline Styles for one level deep for Mdx */
  ul ul {
    list-style-type: circle;
    margin: 0 0 0 2rem;
  }
  ol ul {    
    list-style-type: disc;
    margin: 0 0 0 2rem;
  }
  ol ol {
    list-style-type: lower-latin;
    margin: 0 0 0 2rem;
  }
  ul ol {
    list-style-type: decimal;
    margin: 0 0 0 2rem;    
  }
  ol {
    list-style-type: decimal;
  }

  p {
    margin-top: 1.5rem;
    color: var(--text-body);
    &:first-child {
      margin-top: 0;
    }
  }
  blockquote {
    margin: 1.5rem 3rem 0 3rem;    
  }
  blockquote p {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-left: 1rem;    
    border-left: 10px solid rgba(var(--primary-rgb), 0.7);
    margin-top: 0;    
  }
  blockquote cite {
    display: inline-block;
    line-height: 2.75rem;
  }
  code {
    color: var(--primary);    
    background-color: var(--container);
    padding: 0 0.3rem;    
  }
  hr {
    border: 0;
    height: 2px;
    margin-top: 1.5rem;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--primary), rgba(0, 0, 0, 0));
  }
  table {
    width: 100%;    
    border: 2px solid var(--muted);
  }
  th, td {
    border: 1px solid var(--muted);
  }
  th, td {
    padding: 0.5rem;
  }
  th {
    border-bottom: 2px solid var(--muted);
    background-color: rgba(var(--primary-rgb), var(--th-opacity));
  }

  svg {
    width: 100%;
    height: auto;
    fill: currentColor;
    pointer-events: none;
  }

  /* Footnotes */
  .footnote-ref {
    color: var(--primary);
    margin-left: .25rem;

    font-size: .75rem;
    &:before {
      content: '[';
    }
    &:after {
      content: ']';
    }
  }
  .footnote-backref {
    color: var(--primary);
    margin-left: .25rem;
  }

  /* Branded Links */
  .border-gradient {
    border-image-source: linear-gradient(to right, var(--primary) 0%, var(--link) 76%);
    border-image-slice: 0 0 100 0;
  }

  .border-fadeaway {
    border-image-source: linear-gradient(to right, var(--primary) 0%, var(--link) 76%, transparent 100%);
    border-image-slice: 0 0 100 0;
    border-color: var(--primary);
    border-bottom-width: 2px;
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
