import * as React from 'react'
import styled from 'styled-components'
import { PostListCard } from '../components'

const PostContainer = styled.div`
  /* only for structure */
`

export const PostList = ({ posts }) => (
  <PostContainer
    className='className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pb-4 bg-red-200"
'
  >
    {posts.map((post) => (
      <PostListCard
        post={post}
        collection={post.node.fields.collection}
        key={post.node.id}
      />
    ))}
  </PostContainer>
)
