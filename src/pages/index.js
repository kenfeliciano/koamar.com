import * as React from 'react'

import SEO from '../components/seo'
import { Layout, Hero, ExternalLink, Content, InternalLink } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Content>
      <h1>Hi all!</h1>
      <Hero />
      <p>Not much to see yet, but...</p>
      <div className='bg-surface rounded-lg shadow-lg p-4'>
        <h2>Updates so far!</h2>
        <ul>
          <li key='upd1'>
            Dark Mode Implementation with <ExternalLink href='https://tailwindcss.com'>Tailwind CSS</ExternalLink>
          </li>
          <li key='upd2'>
            A page of <InternalLink href='/blog/code-test'>code snippets</InternalLink> for working on syntax
            highlighting
          </li>
          <li key='upd3'>
            A page of <InternalLink href='/blog/first-fake'>Mdx content</InternalLink> for working out all the rest of
            the styling
          </li>
          <li key='upd4'>
            <InternalLink href='/site/initial-setup'>Site: Initial Setup</InternalLink> - First post in the Site
            Development section!
          </li>
        </ul>
      </div>
      <h2>Be well!</h2>
    </Content>
  </Layout>
)

export default IndexPage
