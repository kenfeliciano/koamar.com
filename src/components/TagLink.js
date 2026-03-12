import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagWrapper = styled(Link)`
  /* structure only */
`

export const TagLink = ({ tag }) => (
  <TagWrapper
    className='rounded-lg hover:(ring-2 ring-primary) bg-brand-opposite mr-2 px-2 py-1 cursor-pointer text-xs'
    to={`/tags/${tag}`}
  >
    # {tag}
  </TagWrapper>
)
