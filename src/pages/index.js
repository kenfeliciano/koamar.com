import * as React from 'react'

import SEO from '../components/seo'
import { Layout, Hero, ExternalLink, Content, InternalLink } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Content menuShift={true}>
      <Hero />
      <h1>Hi all!</h1>
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
          <li key='upd5'>I've got the navigation up and running!</li>
          <li key='upd6'>
            Each <em>landing</em> page is defined with an Mdx file. That was fun to figure out.
          </li>
          <li key='upd7'>
            I've got a hero displaying, thanks to a{' '}
            <ExternalLink href='https://dev.to/dailydevtips1/responsive-header-in-tailwind-css-2djn'>
              lovely tutorial
            </ExternalLink>{' '}
            by <ExternalLink href='https://dev.to/dailydevtips1'>Chris Bongers</ExternalLink>
          </li>
          <li key='upd8'>
            The post list on the pages are using a card, that is clickable, but the text isn't selectable.
          </li>
        </ul>
      </div>
      <h2>Be well!</h2>
    </Content>
  </Layout>
)

export default IndexPage
