import { array } from 'prop-types'
import * as React from 'react'
import tw, { styled } from 'twin.macro'

const TagListContainer = styled.div(
  tw`grid grid-cols-2 gap-y-0 lg:grid-cols-5 lg:gap-x-2 lg:pb-2 md:grid-cols-4`
)
const TagContainer = styled.div(tw`pt-1 mt-0 text-sm`)
export const TagList = ({ tags }) => {
  // const tagList = tags.map((e) => <p>{e.node.frontmatter.tags}</p>)
  const tagList = tagData(tags)
  console.log(tagList)
  return (
    <TagListContainer>
      {tagList.map((tag) => (
        <TagContainer>
          {tag[0]}&nbsp;({tag[1]})
        </TagContainer>
      ))}
      {/* <p>mdx</p>
      <p>music</p>
      <p>test</p>
      <p>abc</p>
      <p>css</p>
      <p>react</p>
      <p>jazz</p>
      <p>tihai</p>
      <p>work</p>
      <p>gatsby</p>
      <p>tailwind</p>
      <p>dark-mode</p> */}
    </TagListContainer>
  )
}

function flattenTags(tags) {
  let listOfTags = [,]
  tags.forEach((f) => {
    if (f.node.frontmatter.tags)
      f.node.frontmatter.tags.forEach((t) => {
        listOfTags.push(t)
      })
  })

  return listOfTags
}

function sortTags(allTags) {
  return allTags.sort()
}

function tagData(tags) {
  const flatTags = sortTags(flattenTags(tags))

  const tagSummary = flatTags.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})
  return Object.entries(tagSummary)
}
