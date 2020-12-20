import * as React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export const CoverImage = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "steve-harvey-xWiXi6wRLGo-unsplash.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <div className='overflow-hidden relative'>
      <Img className='absolute top-0 left-0 w-full h-full' fluid={fluid ? fluid : data.imageSharp.fluid} />
    </div>
  )
}
