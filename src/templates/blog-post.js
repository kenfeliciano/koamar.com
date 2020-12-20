import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import { Layout, CoverImage } from '../components'

const BlogPost = ({ data }) => {
  const coverImage = data.mdx.frontmatter.coverImage ? data.mdx.frontmatter.coverImage.childImageSharp.fluid : null
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.excerpt} />
      <CoverImage fluid={coverImage} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default BlogPost

export const blogQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MM/DD/YYYY")
        excerpt
        slug
        title
        tags
        coverImage {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
