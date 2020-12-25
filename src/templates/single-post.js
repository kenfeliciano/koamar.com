import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import { Layout, CoverImage, Content } from '../components'

const getThirdField = ({ implementation, created, createdCirca, date }) => {
  if (implementation) return <span>Implemented: {implementation}</span>
  if (created) return <span>Written on: {created}</span>
  if (createdCirca) return <span>Written during: {createdCirca}</span>
  return <span className='invisible'>Posted: {date}</span>
}

const BlogPost = ({ data }) => {
  const frontmatter = data.mdx.frontmatter
  const coverImage = frontmatter.coverImage ? frontmatter.coverImage.childImageSharp.fluid : null
  const thirdField = getThirdField(frontmatter)
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <CoverImage fluid={coverImage} />
      <div className='flex justify-between text-sm text-muted mt-1 ml-4 lg:ml-0 mr-4 lg:mr-0'>
        <span>Posted: {frontmatter.date}</span>
        <span>{data.mdx.timeToRead} min. read</span>
        {thirdField}
      </div>
      <Content>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Content>
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
        implementation(formatString: "MM/DD/YYYY")
        created(formatString: "MM/DD/YYYY")
        createdCirca
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
      fields {
        collection
      }
    }
  }
`
