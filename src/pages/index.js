import * as React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import { Layout, Hero, ExternalLink, Content } from '../components'

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
            A page of{' '}
            <Link className='inline-link border-fadeaway border-primary border-b-2' to='/blog/code-test'>
              code snippets
            </Link>{' '}
            for working on syntax highlighting
          </li>
          <li key='upd3'>
            A page of{' '}
            <Link className='inline-link border-fadeaway border-primary border-b-2' to='/blog/first-fake'>
              Mdx content
            </Link>{' '}
            for working out all the rest of the styling
          </li>
          <li key='upd4'>
            <Link className='inline-link border-fadeway border-primary border-b-2' to='/site/initial-setup'>
              Site: Initial Setup
            </Link>{' '}
            - First post in the Site Development section!
          </li>
        </ul>
      </div>
      <h2>Be well!</h2>
    </Content>
  </Layout>
)

export default IndexPage
