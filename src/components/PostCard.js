import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const PostWrapper = styled(Link)`
  /* structure only */
`

export const UpdatedWrapper = styled.p`
  /* structure only */
`

export const PostCard = ({ post, collection }) => {
  return (
    <PostWrapper
      className='rounded-lg mt-4 hover:ring-2 hover:ring-primary'
      to={`/${collection}/${post.node.frontmatter.slug}`}
    >
      <div
        key={post.node.id}
        className='flex flex-col h-full p-4 rounded-lg shadow-lg sm:flex-row bg-surface'
      >
        {post.node.frontmatter.coverImage?.childImageSharp?.gatsbyImageData ? (
          <GatsbyImage
            image={post.node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
            className='top-0 left-0 flex-none w-auto h-auto sm:w-36 sm:h-24'
            alt={post.node.frontmatter.coverAlt || ''}
          />
        ) : (
          <div className='bg-surface-main-branded sm:w-36 sm:h-24'></div>
        )}
        <div className='relative flex flex-col justify-between mt-2 sm:ml-4 sm:mt-0'>
          <div>
            <h2>{post.node.frontmatter.title}</h2>
            <p className='mt-1'>{post.node.frontmatter.excerpt}</p>
          </div>
          <div className='mt-6'>
            <p className='text-sm text-muted'>{post.node.frontmatter.date}</p>
            {post.node.frontmatter.updated ? (
              <UpdatedWrapper className='text-sm text-muted m-0'>
                Updated: {post.node.frontmatter.updated}
              </UpdatedWrapper>
            ) : null}
          </div>
        </div>
      </div>
    </PostWrapper>
  )
}
