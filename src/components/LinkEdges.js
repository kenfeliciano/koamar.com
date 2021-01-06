import * as React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import { DoubleChevronLeft, DoubleChevronRight } from '../svgs'

const LinkWrapper = tw.div`
  py-12 px-0 flex items-center justify-between mx-4
`

const LinkButton = tw(Link)`
  text-body text-sm p-2 font-bold
  bg-container hover:bg-brandedSurface dark:hover:bg-opposite
`

export const LinkEdges = ({ isFirst, isLast, prevPage, nextPage, collection }) => {
  return (
    (prevPage || nextPage) && (
      <LinkWrapper isFirst={isFirst} isLast={isLast} inactive='var(--text-disabled)' active='var(--text-body)'>
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
