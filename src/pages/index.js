import * as React from 'react'

import SEO from '../components/seo'
import { Layout, Hero, ExternalLink } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi all!</h1>
    <Hero />
    <p>Not much to see yet, but...</p>
    <div className='bg-surface rounded-lg shadow-lg p-4'>
      <h2>Updates so far!</h2>
      <ul>
        <li>
          Dark Mode Implementation with <ExternalLink href='https://tailwindcss.com'>Tailwind CSS</ExternalLink>
        </li>
      </ul>
    </div>
    <h2>Be well!</h2>
    <p>
      Still, probably best to <ExternalLink href='https://google.com'>search for someplace</ExternalLink> better for
      now.
    </p>
  </Layout>
)

export default IndexPage
