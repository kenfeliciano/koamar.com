import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const tagData = require('../utils/tagData')

const TagListContainer = styled.div`
  /* structure only */
`

const TagContainer = styled(Link)`
  /* structure only */
`

export const TagList = ({ tags }) => {
  // const tagList = tags.map((e) => <p>{e.node.frontmatter.tags}</p>)
  const tagList = tagData(tags)

  return (
    <TagListContainer className='grid grid-cols-2 gap-y-0 lg:grid-cols-5 lg:gap-x-2 lg:pb-2 md:grid-cols-4'>
      {tagList.map((tag) => (
        <TagContainer
          className='pt-1 mt-0 text-sm focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary'
          to={`/tags/${tag[0]}`}
        >
          {tag[0]}&nbsp;({tag[1]})
        </TagContainer>
      ))}
    </TagListContainer>
  )
}
