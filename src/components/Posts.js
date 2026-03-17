import * as React from 'react'
import styled from 'styled-components'
import { PostCard } from '../components'

const PostContainer = styled.div`
  /* structure only */
`

export const Posts = ({ posts }) => (
  <PostContainer className='grid gap-y-4 lg:grid-cols-2 lg:gap-x-4 lg:pb-4'>
    {posts.map((post) => (
      <PostCard post={post} collection={post.node.fields.collection} key={post.node.id} />
    ))}
  </PostContainer>
)
