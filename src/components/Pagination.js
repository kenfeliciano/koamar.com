import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${(props) => (props.isFirst ? props.inactive : props.active)};
    pointer-events: ${(props) => (props.isFirst ? 'none' : 'pointer')};
    cursor: ${(props) => (props.isFirst ? 'default' : 'pointer')};
  }

  a:nth-child(2) {
    color: ${(props) => (props.isLast ? props.inactive : props.active)};
    pointer-events: ${(props) => (props.isLast ? 'none' : 'pointer')};
    cursor: ${(props) => (props.isLast ? 'default' : 'pointer')};
  }
`

export const PaginationElement = styled((props) => <Link {...props} />)`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  text-decoration: none;
  margin: 0 2rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast} inactive='var(--text-disabled)' active='var(--text-body)'>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  )
}
