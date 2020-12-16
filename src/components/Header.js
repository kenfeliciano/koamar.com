import { Link } from 'gatsby'
import * as React from 'react'

import { DarkToggle, Logo } from '.'

export const Header = ({ siteTitle }) => (
  <header className='bg-container text-body p-4 flex justify-between items-center'>
    <h1 className='text-primary no-underline m-0'>
      <Link to='/'>
        <Logo siteTitle={siteTitle} />
      </Link>
    </h1>
    <DarkToggle />
  </header>
)
