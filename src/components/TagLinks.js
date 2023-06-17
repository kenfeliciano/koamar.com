import * as React from 'react'
import tw, { styled } from 'twin.macro'
import { TagLink } from '../components'

const TagContainer = styled.div(
  tw`flex flex-row justify-start py-1 pl-1 my-1 rounded-lg shadow-lg bg-surface`
)

export const TagLinks = ({ tags }) => (
  <TagContainer>
    {tags.map((tag) => (
      <TagLink tag={tag} />
    ))}
  </TagContainer>
)
