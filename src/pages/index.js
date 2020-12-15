import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Hero } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1 className='text-xl2'>Hi all!</h1>
    <Hero />
    <hr />
    Not much to see yet, but...
    <h2>Updates so far!</h2>
    <ul>
      <li className='list-disc'>
        Dark Mode Implementation with <a href='https://tailwindcss.com'>Tailwind CSS</a>
      </li>
    </ul>
    <h2>Be well!</h2>
    <p>
      Still, probably best to <a href='https://google.com'>search for someplace</a> better for now.
    </p>
  </Layout>
)

export default IndexPage
