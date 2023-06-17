import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostWrapper, UpdatedWrapper, TagLinks } from '../components'

export const PostListCard = ({ post, collection }) => (
  <>
    <PostWrapper to={`/${collection}/${post.node.frontmatter.slug}`}>
      <div
        key={post.node.id}
        className='flex flex-col h-full p-4 rounded-lg shadow-lg sm:flex-row bg-surface'
      >
        {post.node.frontmatter.coverImage ? (
          <GatsbyImage
            image={post.node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
            className='top-0 left-0 flex-none w-auto h-auto sm:w-36 sm:h-24'
            alt={post.node.frontmatter.coverAlt}
          />
        ) : (
          <div className='w-auto h-auto bg-brandedSurface sm:w-36 sm:h-24'></div>
        )}
        <div className='relative flex flex-col justify-between mt-2 grow sm:ml-4 sm:mt-0'>
          <div>
            <h2>{post.node.frontmatter.title}</h2>
            <p className='mt-1'>{post.node.excerpt}</p>
          </div>
          <div className='flex flex-col justify-between sm:flex-row'>
            <p className='text-sm text-muted'>{post.node.frontmatter.date}</p>
            {post.node.frontmatter.updated ? (
              <UpdatedWrapper className='text-sm text-muted'>
                Updated: {post.node.frontmatter.updated}
              </UpdatedWrapper>
            ) : null}
          </div>
        </div>
      </div>
    </PostWrapper>
    <TagLinks tags={post.node.frontmatter.tags} />
  </>
)
