import * as React from 'react'
import { App } from './src/components'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { Table, Code } from './src/components'
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
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <App>{element}</App>
    </MDXProvider>
  )
}
