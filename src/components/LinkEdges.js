import * as React from 'react'

import { LinkWrapper, LinkButton } from '../components'
import { DoubleChevronLeft, DoubleChevronRight } from '../svgs'

export const LinkEdges = ({ prevPage, nextPage, collection }) => {
  return (
    (prevPage || nextPage) && (
      <LinkWrapper>
        {prevPage ? (
          <LinkButton to={`/${prevPage.fields.collection}/${prevPage.frontmatter.slug}`}>
            <DoubleChevronLeft />
            {prevPage.frontmatter.title}
          </LinkButton>
        ) : (
          <div></div>
        )}
        {nextPage ? (
          <LinkButton to={`/${nextPage.fields.collection}/${nextPage.frontmatter.slug}`}>
            {nextPage.frontmatter.title}
            <DoubleChevronRight />
          </LinkButton>
        ) : (
          <div></div>
        )}
      </LinkWrapper>
    )
  )
}
