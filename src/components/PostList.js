import * as React from 'react'
import tw from 'tailwind-styled-components'
import { PostListCard } from '../components'

const PostContainer = tw.div`grid gap-y-0 lg:grid-cols-1 lg:pb-4`

export const PostList = ({ posts }) => (
  <PostContainer>
    {posts.map((post) => (
      <PostListCard
        post={post}
        collection={post.node.fields.collection}
        key={post.node.id}
      />
    ))}
  </PostContainer>
)
