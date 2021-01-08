import * as React from 'react'

import { LinkWrapper, LinkButton } from '../components'
import { DoubleChevronLeft, DoubleChevronRight } from '../svgs'

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    (prevPage || nextPage) && (
      <LinkWrapper isFirst={isFirst} isLast={isLast}>
        {!isFirst ? (
          <LinkButton to={prevPage}>
            <DoubleChevronLeft />
            Previous Page
          </LinkButton>
        ) : (
          <div></div>
        )}
        {!isLast ? (
          <LinkButton to={nextPage}>
            Next Page
            <DoubleChevronRight />
          </LinkButton>
        ) : (
          <div></div>
        )}
      </LinkWrapper>
    )
  )
}
