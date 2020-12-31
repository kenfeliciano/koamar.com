import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import { Layout, CoverImage } from '../components'

const postList = ({ pageContext, data }) => {
  const { collection } = pageContext
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO />
      <CoverImage />
      <h1>{collection} posts</h1>
      <h2>To Do List:</h2>
      <ul>
        <li>Create Card components for the posts and format them better</li>
        <li>Perhaps they could be in two columns for larger screens</li>
        <li>Add pagination</li>
        <li>Need some sort of light side branded surface</li>
        <h3>Mdx File</h3>
        <li>Title of section</li>
        <li>Add cover image that is correct for the collection</li>
        <li>Add blurb for what is going to go into this section (short!)</li>
      </ul>
      {posts.map((post) => (
        <div key={post.node.id} className='flex rounded-lg shadow-lg bg-surface mt-4 p-4'>
          {post.node.frontmatter.coverImage ? (
            <Img
              className='absolute top-0 left-0 w-36 h-24 flex-none'
              fluid={post.node.frontmatter.coverImage.childImageSharp.fluid}
            />
          ) : (
            <div className='bg-brandedSurface w-36 h-24'></div>
          )}
          <div className='ml-4 relative flex flex-col justify-between'>
            <div>
              <Link to={`/${collection}/${post.node.frontmatter.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p className='mt-1'>{post.node.frontmatter.excerpt}</p>
            </div>
            <p className='text-sm text-muted'>{post.node.frontmatter.date}</p>
          </div>
        </div>
      ))}
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
  }
`
