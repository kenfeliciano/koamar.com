import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'
import Headroom from 'react-headroom'

import { Header, ExternalLink, MenuProvider } from '.'

const SiteWrapper = styled.div(() => [tw`h-full m-auto max-w-screen-lg pt-0 px-0 pb-6 mt-0`])

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
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Headroom>
        <SiteWrapper>
          <main>{children}</main>
          <footer className='text-muted text-sm mt-6 px-4'>
            © {new Date().getFullYear()}, Built with
            {` `}
            <ExternalLink href='https://www.gatsbyjs.com'>Gatsby</ExternalLink>
          </footer>
        </SiteWrapper>
      </MenuProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
