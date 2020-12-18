import * as React from 'react'

import SEO from '../components/seo'
import { Layout, Hero } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi all!</h1>
    <Hero />
    <p>Not much to see yet, but...</p>
    <div className='bg-container rounded-lg shadow-lg p-4'>
      <h2>Updates so far!</h2>
      <ul>
        <li>
          Dark Mode Implementation with <a href='https://tailwindcss.com'>Tailwind CSS</a>
        </li>
      </ul>
    </div>
    <h2>Be well!</h2>
    <p>
      Still, probably best to <a href='https://google.com'>search for someplace</a> better for now.
    </p>
  </Layout>
)

export default IndexPage
