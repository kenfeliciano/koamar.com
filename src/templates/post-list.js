import * as React from 'react'

import SEO from '../components/seo'
import { Layout, CoverImage, Content, Pagination, Posts } from '../components'

export const Head = ({ pageContext }) => {
  const { collection } = pageContext
  const titles = {
    blog: "Ken's Blog",
    project: 'Projects and Creations',
    site: 'Site Development',
  }
  return <SEO title={titles[collection] || 'Posts'} />
}

const postList = ({ pageContext, data, children }) => {
  const { currentPage, numPages, collection } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `/${collection}` : `/${collection}/${currentPage - 1}`
  const nextPage = `/${collection}/${currentPage + 1}`

  const { posts, site } = pageContext

  return (
    <Layout>
      <CoverImage
        fluid={site.frontmatter.coverImage.childImageSharp.gatsbyImageData}
        alt={site.frontmatter.coverAlt}
      />
      <Content>
        <h1>{site.frontmatter.title}</h1>
        {currentPage === 1 && children}
        <Posts posts={posts} />
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default postList
