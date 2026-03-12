import * as React from 'react'
import { ExternalLinkIcon } from '../svgs'

export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className='inline-link external-link border-fadeaway hover:bg-brandedSurface focus:bg-brandedSurface'
    target='_blank'
    rel='noreferrer noopener nofollow'
  >
    {children}
    <ExternalLinkIcon />
  </a>
)
