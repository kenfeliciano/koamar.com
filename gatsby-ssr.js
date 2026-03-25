import * as React from 'react'
import { StyleSheetManager } from 'styled-components'
import { MagicScriptTag } from './gatsby-wrapper'

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // MagicScriptTag MUST run before hydration
  setHeadComponents([<MagicScriptTag key='magic-script' />])

  setPreBodyComponents([<div id='sc-target' key='sc-target'></div>])
}
