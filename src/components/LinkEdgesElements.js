import { Link } from 'gatsby'
import tw from 'twin.macro'

export const LinkWrapper = tw.div`
  py-12 px-0 flex items-center justify-between mx-4
`

export const LinkButton = tw(Link)`
  text-body text-sm p-2 font-bold
  bg-container hover:bg-brandedSurface dark:hover:bg-opposite
`
