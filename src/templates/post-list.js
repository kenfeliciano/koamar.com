import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import tw, { styled } from 'twin.macro'

import SEO from '../components/seo'
import { Layout, CoverImage, Content, PostCard, Pagination } from '../components'

const PostContainer = styled.div(tw`grid gap-y-0 lg:grid-cols-2 lg:gap-x-4 lg:pb-4`)

const postList = ({ pageContext, data }) => {
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
      <CoverImage fluid={site.frontmatter.coverImage.childImageSharp.fluid} />
      <Content>
        <h1>{site.frontmatter.title}</h1>
        {currentPage === 1 && <MDXRenderer>{site.body}</MDXRenderer>}
        <PostContainer>
          {posts.map((post) => (
            <PostCard post={post} collection={collection} key={post.node.id} />
          ))}
        </PostContainer>
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
      sort: { fields: frontmatter___date, order: DESC }
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
          excerpt
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
