import * as React from 'react'

import SEO from '../components/seo'
import { Layout, Hero, ExternalLink, Content, InternalLink } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Content menuShift={true}>
      <Hero />
      <h1>Hi all!</h1>
      <p>Welcome to KoaMar, the virtual home of Ken Feliciano.</p>
      <div className='p-4 rounded-lg shadow-lg bg-surface'>
        <h2>Updates so far!</h2>
        <ul>
          <li key='upd1'>
            Dark Mode Implementation with{' '}
            <ExternalLink href='https://tailwindcss.com'>Tailwind CSS</ExternalLink>
          </li>
          <li key='upd2'>
            A page of <InternalLink href='/blog/code-test'>code snippets</InternalLink>{' '}
            for working on syntax highlighting
          </li>
          <li key='upd3'>
            A page of <InternalLink href='/blog/first-fake'>Mdx content</InternalLink> for
            working out all the rest of the styling
          </li>
          <li key='upd4'>
            <InternalLink href='/site/initial-setup'>Site: Initial Setup</InternalLink> -
            First post in the Site Development section!
          </li>
          <li key='upd5'>Navigation up and running!</li>
          <li key='upd6'>
            Each <em>landing</em> page is defined with an Mdx file. That was fun to figure
            out.
          </li>
          <li key='upd7'>
            A hero displaying, thanks to a{' '}
            <ExternalLink href='https://dev.to/dailydevtips1/responsive-header-in-tailwind-css-2djn'>
              lovely tutorial
            </ExternalLink>{' '}
            by{' '}
            <ExternalLink href='https://dev.to/dailydevtips1'>Chris Bongers</ExternalLink>
          </li>
          <li key='upd8'>
            <InternalLink href='/site'>Site Dev posts</InternalLink> - There are{' '}
            <b>now</b> enough for pagination! Is this what is called a Devlog?
          </li>
        </ul>
      </div>
      <h2>Be well!</h2>
      <a rel='me' href='https://techhub.social/@kafeliciano'>
        I'm lurking on Mastodon (and haven't setup the social media footer thingy just
        yet)
      </a>
    </Content>
  </Layout>
)

export default IndexPage
