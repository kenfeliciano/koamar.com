import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const Image = ({ fileName = 'steve-harvey-xWiXi6wRLGo-unsplash.jpg', ...rest }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.edges.find((edge) => edge.node.fluid.originalName === fileName)
      if (!image) {
        return null
      }
      return <Img fluid={image.node.fluid} {...rest} />
    }}
  />
)
