import * as React from 'react'
import tw, { styled } from 'twin.macro'
import { PostCard } from '../components'

const PostContainer = styled.div(tw`grid gap-y-0 lg:grid-cols-2 lg:gap-x-4 lg:pb-4`)

export const Posts = ({ posts, collection }) => (
  <PostContainer>
    {posts.map((post) => (
      <PostCard post={post} collection={collection} key={post.node.id} />
    ))}
  </PostContainer>
)
