import * as React from 'react'
import SEO from '../components/seo'
import { Layout, Content, PostList } from '../components'

const tagPosts = ({ pageContext }) => {
  const { id, posts } = pageContext

  return (
    <Layout>
      <SEO />
      <Content>
        <h1>{id}</h1>
        <PostList posts={posts} />
      </Content>
    </Layout>
  )
}

export default tagPosts
