import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'

import { DarkToggle } from '../components'

const Header = ({ siteTitle }) => (
  <header className='bg-container text-body p-4 flex justify-between items-center'>
    <h1 className='text-primary no-underline m-0'>
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
