import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h2>Greetings folks,</h2>
    <p>Welcome to KoaMar 2020</p>
    <p>It's been 24 years, about time something happened!</p>
    <hr />
    But, nothing to see yet, so <a href='https://google.com'>search for someplace</a> better for now.
    <h2>Be well!</h2>
  </Layout>
)

export default IndexPage
