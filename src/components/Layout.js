import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'

import { Header, ExternalLink, MenuProvider } from '.'

const SiteWrapper = styled.div`
  background: var(--container);
`

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

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MenuProvider>
        <Headroom>
          <Header
            siteTitle={data.site.siteMetadata?.title || `Title`}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </Headroom>
        <SiteWrapper className='mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-12 pb-8'>
          <main className='w-full max-w-full'>{children}</main>
          <footer className='text-muted text-sm mt-6 px-4'>
            Built with
            {` `}
            <ExternalLink href='https://www.gatsbyjs.com'>Gatsby</ExternalLink> from 2020
            thru {new Date().getFullYear()} (and beyond?!)
          </footer>
        </SiteWrapper>
      </MenuProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
