import * as React from 'react'
import SEO from '../components/seo'
import { Layout, CoverImage, Content, LinkEdges, TagLinks } from '../components'
import styled from 'styled-components'

const InfoWrapper = styled.div.attrs({
  className: 'flex flex-col items-center sm:flex-row',
})``

const InfoSeparator = styled.span.attrs({
  className: 'hidden sm:inline',
})``

const getThirdField = ({ implementation, created, createdCirca, date }) => {
  if (implementation)
    return (
      <InfoWrapper>
        <span>Implemented</span>
        <InfoSeparator>:&nbsp;</InfoSeparator>
        <span>{implementation}</span>
      </InfoWrapper>
    )
  if (created)
    return (
      <InfoWrapper>
        <span>Written</span>
        <InfoSeparator>:&nbsp;</InfoSeparator>
        <span>{created}</span>
      </InfoWrapper>
    )
  if (createdCirca)
    return (
      <InfoWrapper>
        <span>Written during</span>
        <InfoSeparator>:&nbsp;</InfoSeparator>
        <span>{createdCirca}</span>
      </InfoWrapper>
    )
  return <span className='invisible'>Posted {date}</span>
}

export default function BlogPost({ pageContext, children }) {
  console.log('SINGLE POST CONTEXT:', pageContext)

  const { frontmatter, fields, prev, next, timeToRead } = pageContext

  const coverImage = frontmatter.coverImage
    ? frontmatter.coverImage.childImageSharp.gatsbyImageData
    : null

  const thirdField = getThirdField(frontmatter)

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <CoverImage fluid={coverImage} alt={frontmatter.coverAlt} />

      <div className='flex items-center justify-between mt-1 ml-2 mr-2 text-xs lg:items-start lg:text-sm text-muted lg:ml-0 lg:mr-0'>
        <InfoWrapper>
          <span>Posted </span>
          <InfoSeparator>:&nbsp;</InfoSeparator>
          <span>{frontmatter.date}</span>
        </InfoWrapper>

        <InfoWrapper>
          <span>{timeToRead} min.</span>
          <InfoSeparator>&nbsp;</InfoSeparator>
          <span>read</span>
        </InfoWrapper>

        {thirdField}
      </div>

      <TagLinks tags={frontmatter.tags} />

      <Content className='mdx-content'>
        <h1>
          {frontmatter.draft && (
            <span className='inline-block p-2 tracking-wide uppercase rounded-lg bg-opposite'>
              (Draft)
            </span>
          )}{' '}
          {frontmatter.title}
        </h1>

        {frontmatter.updated && (
          <p className='mt-1 text-sm text-muted'>Updated: {frontmatter.updated}</p>
        )}

        {children}
      </Content>

      <LinkEdges prevPage={prev} nextPage={next} collection={fields.collection} />
    </Layout>
  )
}
