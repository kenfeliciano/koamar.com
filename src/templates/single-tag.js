import * as React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { Layout, Content, PostList } from '../components'

const tagPosts = ({ pageContext, data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO />
      <Content>
        <h1>{pageContext.id}</h1>
        <PostList posts={posts} />
      </Content>
    </Layout>
  )
}

export default tagPosts

export const pageQuery = graphql`
  query SingleTagPostsQuery($id: [String]) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: $id } } }
    ) {
      edges {
        node {
          fields {
            collection
          }
          frontmatter {
            tags
            slug
            title
            date(formatString: "MMMM D, YYYY")
            updated(formatString: "MMMM D, YYYY")
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
        }
      }
    }
  }
`
