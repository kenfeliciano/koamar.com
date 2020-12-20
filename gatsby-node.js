exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  // Create single blog posts
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id },
    })
  })
}
