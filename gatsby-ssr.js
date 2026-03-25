import * as React from 'react'
import { StyleSheetManager } from 'styled-components'
import { wrapRootElement as wrap, MagicScriptTag } from './gatsby-wrapper'

export const wrapRootElement = ({ element }) => {
  return <StyleSheetManager target='#sc-target'>{wrap({ element })}</StyleSheetManager>
}

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // MagicScriptTag MUST run before hydration
  setHeadComponents([<MagicScriptTag key='magic-script' />])

  setPreBodyComponents([<div id='sc-target' key='sc-target'></div>])
}
