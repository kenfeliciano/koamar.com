import { Link } from 'gatsby'
import * as React from 'react'

import { DarkToggle, Logo } from '../components'

const Header = () => (
  <header className='bg-container text-body p-4 flex justify-between items-center'>
    <h1 className='text-primary no-underline m-0'>
      <Link to='/'>
        <Logo />
      </Link>
    </h1>
    <DarkToggle />
  </header>
)

export default Header
