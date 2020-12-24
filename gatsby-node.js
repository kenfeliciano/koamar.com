exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` || node.internal.type === 'Mdx') {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            fields {
              collection
            }
          }
        }
      }
    }
  `)

  // Create single blog posts
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    const collection = edge.node.fields.collection

    actions.createPage({
      path: `${collection}/${slug}`,
      component: require.resolve('./src/templates/single-post.js'),
      context: { id },
    })
  })
}
