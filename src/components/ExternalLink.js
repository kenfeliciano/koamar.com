import * as React from 'react'
import { ExternalLinkIcon } from '../svgs'

export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className='inline-link external-link border-fadeaway hover:bg-surface-main-branded focus:bg-surface-main-branded'
    target='_blank'
    rel='noreferrer noopener nofollow'
  >
    {children}
    <ExternalLinkIcon />
  </a>
)
