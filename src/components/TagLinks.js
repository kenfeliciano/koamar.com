import * as React from 'react'
import styled from 'styled-components'
import { TagLink } from '../components'

const TagContainer = styled.div`
  @apply flex flex-row justify-start py-1 pl-1 my-1 rounded-lg;
`

export const TagLinks = ({ tags }) => (
  <TagContainer>
    {tags.map((tag) => (
      <TagLink tag={tag} />
    ))}
  </TagContainer>
)
