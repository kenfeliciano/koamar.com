import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'

import { Header, ExternalLink } from '.'

const SiteWrapper = styled.div(() => [tw`h-full m-auto max-w-screen-lg pt-0 px-4 pb-6 mt-6`])

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
      <SiteWrapper>
        <main>{children}</main>
        <footer className='text-muted text-sm mt-6'>
          © {new Date().getFullYear()}, Built with
          {` `}
          <ExternalLink href='https://www.gatsbyjs.com'>Gatsby</ExternalLink>
        </footer>
      </SiteWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
