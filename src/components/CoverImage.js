import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

export const CoverImage = ({ fluid, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(
        fluid: { originalName: { eq: "steve-harvey-xWiXi6wRLGo-unsplash.jpg" } }
      ) {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  `)

  return (
    <div className='relative h-auto m-auto overflow-hidden md:h-96'>
      <GatsbyImage
        image={fluid ? fluid : data.imageSharp.gatsbyImageData}
        className='absolute top-0 left-0 w-full h-full'
        alt={alt}
      />
    </div>
  )
}
