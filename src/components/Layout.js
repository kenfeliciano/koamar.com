import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Header, ExternalLink } from '.'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0rem 1.5rem`,
        }}
      >
        <main className='mt-6'>{children}</main>
        <footer className='text-muted text-sm mt-6'>
          © {new Date().getFullYear()}, Built with
          {` `}
          <ExternalLink href='https://www.gatsbyjs.com'>Gatsby</ExternalLink>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
