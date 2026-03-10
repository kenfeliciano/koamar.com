/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO({ description, lang = 'en', meta = [], title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const author = site.siteMetadata?.author

  return (
    <>
      <html lang={lang} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name='description' content={metaDescription} />

      {/* OpenGraph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={author} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />

      {/* Additional meta tags */}
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </>
  )
}
