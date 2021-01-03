import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'
import { Layout, CoverImage, Content, PostCard } from '../components'

const postList = ({ pageContext, data }) => {
  const { collection } = pageContext
  const posts = data.allMdx.edges
  const site = data.mdx

  return (
    <Layout>
      <SEO />
      <CoverImage fluid={site.frontmatter.coverImage.childImageSharp.fluid} />
      <Content>
        <h1>{site.frontmatter.title}</h1>
        <MDXRenderer>{site.body}</MDXRenderer>
        {posts.map((post) => (
          <PostCard post={post} collection={collection} />
        ))}
      </Content>
    </Layout>
  )
}

export default postList

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!, $collection: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { collection: { eq: $collection } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM D, YYYY")
            excerpt
            coverImage {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
    mdx(frontmatter: { name: { eq: $collection } }) {
      body
      frontmatter {
        title
        coverImage {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
