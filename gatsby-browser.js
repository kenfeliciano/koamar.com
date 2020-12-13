import * as React from 'react'
import { App } from './src/components'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
