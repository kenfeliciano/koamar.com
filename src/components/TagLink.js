import * as React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

const TagWrapper = tw(Link)`
  rounded-lg hover:(ring-2 ring-primary) bg-opposite mr-2 px-2 py-1 cursor-pointer text-sm
`

export const TagLink = ({ tag }) => <TagWrapper to={`/tags/${tag}`}># {tag}</TagWrapper>
