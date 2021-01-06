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
      allMdx(sort: { fields: [fields___collection, frontmatter___date], order: [ASC, DESC] }) {
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
          next {
            id
            frontmatter {
              slug
              title
            }
            fields {
              collection
            }
          }
          previous {
            id
            frontmatter {
              slug
              title
            }
            fields {
              collection
            }
          }
        }
      }
    }
  `)

  // Create paginated pages for posts
  const postsPerPage = 6
  const edges = data.allMdx.edges
  const collectionCount = (arr, val) => arr.reduce((a, edge) => (edge.node.fields.collection === val ? a + 1 : a), 0)

  let groups = []

  groups.push({ groupName: 'blog', count: collectionCount(edges, 'blog') })
  groups.push({ groupName: 'project', count: collectionCount(edges, 'project') })
  groups.push({ groupName: 'site', count: collectionCount(edges, 'site') })

  groups.forEach(({ groupName, count }) => {
    const numPages = Math.ceil(count / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/${groupName}` : `/${groupName}/${i + 1}`,
        component: require.resolve('./src/templates/post-list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          collection: groupName,
          coverImage: `${groupName}-cover.jpg`,
        },
      })
    })
  })

  // Create single blog posts
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    const collection = edge.node.fields.collection

    const prev = edge.previous && edge.previous.fields.collection === collection ? edge.previous : null
    const next = edge.next && edge.next.fields.collection === collection ? edge.next : null

    if (collection !== 'collections') {
      actions.createPage({
        path: `${collection}/${slug}`,
        component: require.resolve('./src/templates/single-post.js'),
        context: { id, prev, next },
      })
    }
  })
}
