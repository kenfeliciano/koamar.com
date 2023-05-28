import * as React from 'react'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

const tagData = require('../utils/tagData')

const TagListContainer = styled.div(
  tw`grid grid-cols-2 gap-y-0 lg:grid-cols-5 lg:gap-x-2 lg:pb-2 md:grid-cols-4`
)
const TagContainer = tw(
  Link
)`pt-1 mt-0 text-sm focus:(ring-2 ring-primary) hover:(ring-2 ring-primary)`

export const TagList = ({ tags }) => {
  // const tagList = tags.map((e) => <p>{e.node.frontmatter.tags}</p>)
  const tagList = tagData(tags)
  console.log(tagList)
  return (
    <TagListContainer>
      {tagList.map((tag) => (
        <TagContainer to={`/tags/${tag[0]}`}>
          {tag[0]}&nbsp;({tag[1]})
        </TagContainer>
      ))}
    </TagListContainer>
  )
}
