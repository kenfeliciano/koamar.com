import * as React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'

import { ThemeContext } from '../components'
import { InfoIcon, SuccessIcon, WarningIcon, StopIcon, SharksIcon } from '../svgs'

const getIcon = (blockType) => {
  switch (blockType) {
    case 'success':
      return <SuccessIcon />
    case 'warning':
      return <WarningIcon />
    case 'danger':
      return <StopIcon />
    case 'primary':
      return <SharksIcon />
    default:
      return <InfoIcon />
  }
}

const TextBlock = ({ blockType, children, padding = '2rem 1.5rem' }) => {
  const iconElement = getIcon(blockType)
  const { theme } = useContext(ThemeContext)

  return (
    <StyledTextBlock theme={theme} blockType={blockType} padding={padding}>
      <StyledIconWrap theme={theme} blockType={blockType}>
        {iconElement}
      </StyledIconWrap>
      {children}
    </StyledTextBlock>
  )
}

export const Success = ({ children, padding }) => {
  return <TextBlock blockType='success' children={children} padding={padding} />
}
export const Warning = ({ children, padding }) => {
  return <TextBlock blockType='warning' children={children} padding={padding} />
}
export const Danger = ({ children, padding }) => {
  return <TextBlock blockType='danger' children={children} padding={padding} />
}
export const Info = ({ children, padding }) => {
  return <TextBlock blockType='info' children={children} padding={padding} />
}
export const Primary = ({ children, padding }) => {
  return <TextBlock blockType='primary' children={children} padding={padding} />
}

// BlockTypeColors
const color = {
  success: `#46c763`,
  info: `#17a2b8`,
  warning: `#ffc107`,
  danger: `#ee5252`,
}

const bgColorLight = {
  success: `#e0f8e5`,
  info: `#daf1f4`,
  warning: `#f8f1e4`,
  danger: `#f8e4e4`,
}

const bgColorDark = {
  success: `#3f774b`,
  info: `#2e5d64`,
  warning: `#796733`,
  danger: `#693434`,
}

const StyledTextBlock = styled.div`
  position: relative;
  border-left-width: 3px;
  border-left-style: solid;
  margin: 2rem 1rem;
  border-radius: 5px;
  padding: ${({ padding }) => padding};

  /* These are defaults, used for primary */
  border-color: var(--opposite);
  background: var(--branded-surface);

  /* These override the defaults based on the blockType */
  border-color: ${(props) => color[props.blockType]};
  background: ${(props) => (props.theme === 'light' ? bgColorLight[props.blockType] : bgColorDark[props.blockType])};

  > :nth-child(2) {
    margin-top: 0;
  }
`

const StyledIconWrap = styled.div`
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  background: var(--surface);
  padding: 0.5rem;
  border-radius: 50%50%;
  svg {
    width: 30px;
    height: 30px;

    /* Default, used for primary */
    fill: var(--muted);

    /* blockType override */
    fill: ${(props) => color[props.blockType]};
  }
`
