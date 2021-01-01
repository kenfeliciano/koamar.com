import * as React from 'react'
import { Link } from 'gatsby'

export const MenuItem = ({ href, children, first }) => (
  <Link
    to={href}
    className={`block px-2 py-1 font-semibold rounded hover:bg-opposite
                ${first !== 'true' ? ' mt-1 sm:mt-0 sm:ml-2' : ''}`}
  >
    {children}
  </Link>
)
