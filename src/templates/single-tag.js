import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import { Layout, CoverImage, Content, Posts } from '../components'
import tw, { styled } from 'twin.macro'

const PostContainer = styled.div(tw`flex flex-row`)

export const PostWrapper = tw(Link)`
  rounded-lg mt-4 hover:(ring-2 ring-primary)
`
const tagPosts = ({ pageContext, data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO />
      {/* <CoverImage
        fluid={site.frontmatter.coverImage.childImageSharp.gatsbyImageData}
        alt={site.frontmatter.coverAlt}
      /> */}
      <Content>
        <h1>{pageContext.id}</h1>
        <Posts posts={posts} />
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
