import * as React from 'react'
import { graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'

import SEO from '../components/seo'
import {
  Layout,
  Hero,
  ExternalLink,
  Content,
  InternalLink,
  PostCard,
} from '../components'

const PostContainer = styled.div(tw`grid gap-y-0 lg:grid-cols-2 lg:gap-x-4 lg:pb-4`)

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO title='Home' />
      <Content menuShift={true}>
        <Hero />
        <h1>Hi all!</h1>
        <p>Welcome to KoaMar, the virtual home of Ken Feliciano.</p>
        <h2>Most recent posts</h2>
        <PostContainer>
          {posts.map((post) => (
            <PostCard post={post} collection={post.node.fields.collection} />
          ))}
        </PostContainer>

        <h2>Be well!</h2>
        <a rel='me' href='https://techhub.social/@kafeliciano'>
          I'm lurking on Mastodon (and haven't setup the social media footer thingy just
          yet)
        </a>
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query recentPosts {
    allMdx(
      sort: { fields: [frontmatter___date], order: [DESC] }
      filter: { frontmatter: { name: { eq: null }, draft: { eq: false } } }
      limit: 6
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
  }
`
