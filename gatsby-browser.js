import * as React from 'react'
import { StyleSheetManager } from 'styled-components'
import { wrapRootElement as wrap } from './gatsby-wrapper'

import './src/styles/global.css'
import './src/styles/code-layout.css'

export const wrapRootElement = ({ element }) => {
  if (typeof document !== 'undefined') {
    const target = document.getElementById('sc-target')
    return <StyleSheetManager target={target}>{wrap({ element })}</StyleSheetManager>
  }
  return wrap({ element })
}
