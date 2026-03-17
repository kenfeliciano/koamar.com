import * as React from 'react'
import SEO from '../components/seo'
import { Layout, Content, PostList } from '../components'

export const Head = ({ pageContext }) => {
  const { id } = pageContext
  return <SEO title={`#${id}`} />
}

const tagPosts = ({ pageContext }) => {
  const { id, posts } = pageContext

  return (
    <Layout>
      <Content>
        <h1>{id}</h1>
        <PostList posts={posts} />
      </Content>
    </Layout>
  )
}

export default tagPosts
