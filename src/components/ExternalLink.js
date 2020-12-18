import * as React from 'react'

export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className='inline-link border-fadeaway border-primary border-b-2'
    target='_blank'
    rel='noreferrer noopener'
  >
    {children}
  </a>
)
