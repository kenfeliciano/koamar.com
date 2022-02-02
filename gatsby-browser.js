import * as React from 'react'
import { App } from './src/components'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { Table, Code, MarkdownLink, Primary, Danger, Warning, Success, Info } from './src/components'
import './src/styles/global.css'
import './src/styles/code-layout.css'

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
  h2: (props) => (
    <h2 id={props.children.replace(/\s/g, '-').toLowerCase()}>
      <a href={`#${props.children.replace(/\s/g, '-').toLowerCase()}`}>{props.children}</a>
    </h2>
  ),
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
