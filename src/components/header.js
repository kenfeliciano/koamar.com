import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'

import { DarkToggle } from '../components'

const Header = ({ siteTitle }) => (
  <header className='bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-4 flex justify-between items-center'>
    <h1 className='text-primary dark:text-secondary no-underline m-0'>
      <Link to='/'>{siteTitle}</Link>
    </h1>
    <DarkToggle />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
