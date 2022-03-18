import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import tw from 'twin.macro'

export const LinkWrapper = tw(Link)`
  rounded-lg mt-4 hover:(ring-2 ring-primary)
`

export const UpdatedWrapper = tw.p`
  m-0
`

export const PostCard = ({ post, collection }) => (
  <LinkWrapper to={`/${collection}/${post.node.frontmatter.slug}`}>
    <div
      key={post.node.id}
      className='flex flex-col h-full p-4 rounded-lg shadow-lg sm:flex-row bg-surface'
    >
      {post.node.frontmatter.coverImage ? (
        <GatsbyImage
          image={post.node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
          className='top-0 left-0 flex-none w-auto h-auto sm:w-36 sm:h-24'
        />
      ) : (
        <div className='bg-brandedSurface sm:w-36 sm:h-24'></div>
      )}
      <div className='relative flex flex-col justify-between mt-2 sm:ml-4 sm:mt-0'>
        <div>
          <h2>{post.node.frontmatter.title}</h2>
          <p className='mt-1'>{post.node.excerpt}</p>
        </div>
        <p className='text-sm text-muted'>{post.node.frontmatter.date}</p>
        {post.node.frontmatter.updated ? (
          <UpdatedWrapper className='text-sm text-muted'>
            Updated: {post.node.frontmatter.updated}
          </UpdatedWrapper>
        ) : null}
      </div>
    </div>
  </LinkWrapper>
)
