import * as React from 'react'
import { Link } from 'gatsby'

export const InternalLink = ({ href, children }) => (
  <Link to={href} className='inline-link border-fadeaway border-primary border-b-2'>
    {children}
  </Link>
)
