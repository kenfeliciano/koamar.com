import * as React from 'react'
import styled from 'styled-components'
import { PostListCard } from '../components'

const PostContainer = styled.div`
  /* only for structure */
`

export const PostList = ({ posts }) => (
  <PostContainer className='grid gap-y-0 lg:grid-cols-1 lg:pb-4'>
    {posts.map((post) => (
      <PostListCard
        post={post}
        collection={post.node.fields.collection}
        key={post.node.id}
      />
    ))}
  </PostContainer>
)
