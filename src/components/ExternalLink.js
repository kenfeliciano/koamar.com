import * as React from 'react'

export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className='inline-link external-link border-fadeaway'
    target='_blank'
    rel='noreferrer noopener nofollow'
  >
    {children}
  </a>
)
