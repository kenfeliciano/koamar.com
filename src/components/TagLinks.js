import * as React from 'react'
import styled from 'styled-components'
import { TagLink } from '../components'

const TagContainer = styled.div`
  /* structure only */
`

export const TagLinks = ({ tags }) => (
  <TagContainer className='flex flex-row justify-start py-1 pl-1 my-1 rounded-lg'>
    {tags.map((tag) => (
      <TagLink tag={tag} />
    ))}
  </TagContainer>
)
