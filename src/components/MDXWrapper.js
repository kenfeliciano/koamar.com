/* eslint react/prop-types: 0 */
/* eslint react/display-name: 0  */
import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { Code } from '../components'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  h2: (props) => (
    <h2 id={props.children.replace(/\s/g, '-').toLowerCase()}>
      <a href={`#${props.children.replace(/\s/g, '-').toLowerCase()}`}>{props.children}</a>
    </h2>
  ),
  wrapper: ({ children }) => <>{children}</>,
}
export const MDXWrapper = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>
