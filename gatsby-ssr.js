import * as React from 'react'
import { wrapRootElement as wrap, MagicScriptTag } from './gatsby-wrapper'

export const wrapRootElement = wrap

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // MagicScriptTag MUST run before hydration
  setHeadComponents([<MagicScriptTag key='magic-script' />])

  setPreBodyComponents([<div id='sc-target' key='sc-target'></div>])
}
