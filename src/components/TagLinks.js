import * as React from 'react'
import tw from 'tailwind-styled-components'
import { TagLink } from '../components'

const TagContainer = tw.div`flex flex-row justify-start py-1 pl-1 my-1 rounded-lg`

export const TagLinks = ({ tags }) => (
  <TagContainer>
    {tags.map((tag) => (
      <TagLink tag={tag} />
    ))}
  </TagContainer>
)
