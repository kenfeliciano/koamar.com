import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import { Layout, CoverImage, Content, LinkEdges } from '../components'
import tw from 'twin.macro'

const InfoWrapper = tw.div`
  flex flex-col items-center sm:flex-row
`

const InfoSeparator = tw.span`
  hidden sm:inline
`

const getThirdField = ({ implementation, created, createdCirca, date }) => {
  if (implementation)
    return (
      <InfoWrapper>
        <span>Implemented</span>
        <InfoSeparator>:&nbsp;</InfoSeparator>
        <span>{implementation}</span>
      </InfoWrapper>
    )
  if (created)
    return (
      <InfoWrapper>
        <span>Written</span>
        <InfoSeparator>:&nbsp;</InfoSeparator>
        <span>{created}</span>
      </InfoWrapper>
    )
  if (createdCirca)
    return (
      <InfoWrapper>
        <span>Written during</span>
        <InfoSeparator>:&nbsp;</InfoSeparator>
        <span>{createdCirca}</span>
      </InfoWrapper>
    )
  return <span className='invisible'>Posted {date}</span>
}

const BlogPost = ({ data, pageContext }) => {
  const frontmatter = data.mdx.frontmatter
  const coverImage = frontmatter.coverImage ? frontmatter.coverImage.childImageSharp.fluid : null
  const thirdField = getThirdField(frontmatter)
  const collection = data.mdx.fields.collection
  const nextPost = pageContext.next
  const prevPost = pageContext.prev

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <CoverImage fluid={coverImage} />
      <div className='flex items-center justify-between text-xs lg:items-start lg:text-sm text-muted mt-1 ml-2 lg:ml-0 mr-2 lg:mr-0'>
        <InfoWrapper>
          <span>Posted </span>
          <InfoSeparator>:&nbsp;</InfoSeparator>
          <span>{frontmatter.date}</span>
        </InfoWrapper>
        <InfoWrapper>
          <span>{data.mdx.timeToRead} min.</span>
          <InfoSeparator>&nbsp;</InfoSeparator>
          <span>read</span>
        </InfoWrapper>
        {thirdField}
      </div>
      <Content>
        <h1>
          {frontmatter.draft && (
            <span className='bg-opposite rounded-lg p-2 inline-block uppercase tracking-wide'>(Draft)</span>
          )}{' '}
          {frontmatter.title}
        </h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Content>
      <LinkEdges prevPage={prevPost} nextPage={nextPost} collection={collection} />
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
        draft
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
