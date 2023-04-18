import * as React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import { Layout, Hero, Content, Posts, TagList } from '../components'

const IndexPage = ({ data }) => {
  const recentPosts = data.mostRecent.edges
  const featuredPosts = data.featured.edges
  const tags = data.tags.edges
  return (
    <Layout>
      <SEO title='Home' />
      <Content menuShift={true}>
        <Hero />
        <h1>Hi all!</h1>
        <p>Welcome to KoaMar, the virtual home of Ken Feliciano.</p>
        <h2>Featured posts</h2>
        <Posts posts={featuredPosts} />
        <h2>Most recent posts</h2>
        <Posts posts={recentPosts} />
        <h2>Tags</h2>
        <TagList tags={tags} />

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
  query Posts {
    mostRecent: allMdx(
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
    featured: allMdx(
      sort: { fields: [frontmatter___date], order: [DESC] }
      filter: {
        frontmatter: { name: { eq: null }, draft: { eq: false }, featured: { eq: true } }
      }
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
    tags: allMdx(filter: { fields: { collection: { ne: "collections" } } }) {
      edges {
        node {
          frontmatter {
            tags
            slug
          }
          fields {
            collection
          }
        }
      }
    }
  }
`
