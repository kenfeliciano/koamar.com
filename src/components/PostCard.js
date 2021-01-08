import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import tw from 'twin.macro'

export const LinkWrapper = tw(Link)`
  rounded-lg mt-4 hover:(ring-2 ring-primary)
`

export const PostCard = ({ post, collection }) => (
  <LinkWrapper to={`/${collection}/${post.node.frontmatter.slug}`}>
    <div key={post.node.id} className='flex flex-col sm:flex-row rounded-lg shadow-lg bg-surface p-4 h-full'>
      {post.node.frontmatter.coverImage ? (
        <Img
          className='absolute top-0 left-0 w-auto h-auto sm:w-36 sm:h-24 flex-none'
          fluid={post.node.frontmatter.coverImage.childImageSharp.fluid}
        />
      ) : (
        <div className='bg-brandedSurface sm:w-36 sm:h-24'></div>
      )}
      <div className='sm:ml-4 mt-2 sm:mt-0 relative flex flex-col justify-between'>
        <div>
          <h2>{post.node.frontmatter.title}</h2>
          <p className='mt-1'>{post.node.excerpt}</p>
        </div>
        <p className='text-sm text-muted'>{post.node.frontmatter.date}</p>
      </div>
    </div>
  </LinkWrapper>
)
