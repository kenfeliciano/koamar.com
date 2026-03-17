import * as React from 'react'

import SEO from '../components/seo'
import { Layout, Hero, Content, Posts, TagList } from '../components'

export const Head = () => <SEO title='Home' />

export default function HomePage({ pageContext }) {
  const { mostRecent, featured, tags } = pageContext

  return (
    <Layout>
      <Content menuShift={true}>
        <Hero />
        <h1>Hi all!</h1>
        <p>Welcome to KoaMar, the virtual home of Ken Feliciano.</p>
        <h2>Featured posts</h2>
        <Posts posts={featured || []} />
        <h2>Most recent posts</h2>
        <Posts posts={mostRecent || []} />
        <h2>Tags</h2>
        <TagList tags={tags || []} />
        <h2>Be well!</h2>
        <a rel='me' href='https://techhub.social/@kafeliciano'>
          Mastodon
        </a>{' '}
        {` `}
        <a href='https://bsky.app/profile/kafeliciano.bsky.social'>Bluesky</a>
      </Content>
    </Layout>
  )
}
