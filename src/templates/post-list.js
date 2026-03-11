import * as React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import { Layout, CoverImage, Content, Pagination, Posts } from '../components'

const postList = ({ pageContext, data, children }) => {
  const { currentPage, numPages, collection } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `/${collection}` : `/${collection}/${currentPage - 1}`
  const nextPage = `/${collection}/${currentPage + 1}`

  const posts = data.allMdx.edges
  const site = data.mdx

  return (
    <Layout>
      <SEO />
      <CoverImage
        fluid={site.frontmatter.coverImage.childImageSharp.gatsbyImageData}
        alt={site.frontmatter.coverAlt}
      />
      <Content>
        <h1>{site.frontmatter.title}</h1>
        {currentPage === 1 && children}
        <Posts posts={posts} />
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default postList

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!, $collection: String!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fields: { collection: { eq: $collection } }
        frontmatter: { draft: { eq: false } }
      }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM D, YYYY")
            updated(formatString: "MMMM D, YYYY")
            excerpt
            coverAlt
            coverImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          id
          excerpt
          fields {
            collection
          }
        }
      }
    }
    mdx(frontmatter: { name: { eq: $collection } }) {
      frontmatter {
        title
        coverAlt
        coverImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
