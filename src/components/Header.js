import { Link } from 'gatsby'
import * as React from 'react'
import { useContext } from 'react'

import { DarkToggle, MenuContext, MenuItem } from '.'
import { Logo, Hamburger, X } from '../svgs'

export const Header = ({ siteTitle }) => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  return (
    <header className='bg-container text-body border-fadeaway sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center'>
      <div className='flex items-center justify-between px-4 py-3 sm:p-0'>
        <h1>
          <Link to='/'>
            <Logo siteTitle={siteTitle} />
          </Link>
        </h1>
        <div className='sm:hidden'>
          <button
            type='button'
            onClick={() => setMenuOpen(!menuOpen)}
            className='rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary aria-expanded="false"'
          >
            <span className='sr-only'>Open main menu</span>
            {menuOpen ? <X /> : <Hamburger />}
          </button>
        </div>
      </div>
      <nav className={`absolute w-full sm:static sm:w-auto sm:block ${menuOpen ? ' block' : ' hidden'}`}>
        <div className='w-full sm:flex sm:p-0 bg-container border-fadeaway sm:border-none'>
          <MenuItem href='/blog' first='true'>
            Blog
          </MenuItem>
          <MenuItem href='/project'>Projects</MenuItem>
          <MenuItem href='/site'>Site Dev</MenuItem>
          <DarkToggle />
        </div>
      </nav>
    </header>
  )
}
