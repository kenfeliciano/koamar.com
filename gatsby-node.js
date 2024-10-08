const graphql = require('gatsby').graphql
const tagData = require('./src/utils/tagData')

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

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query CreatePagesQuery {
      pages: allMdx(
        sort: { fields: [fields___collection, frontmatter___date], order: [ASC, DESC] }
      ) {
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
      tags: allMdx(filter: { fields: { collection: { ne: "collections" } } }) {
        edges {
          node {
            frontmatter {
              tags
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

  // Create paginated pages for posts
  const postsPerPage = 6
  const edges = data.pages.edges
  const collectionCount = (arr, val) =>
    arr.reduce((a, edge) => (edge.node.fields.collection === val ? a + 1 : a), 0)

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
  data.pages.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    const collection = edge.node.fields.collection

    const prev =
      edge.previous && edge.previous.fields.collection === collection
        ? edge.previous
        : null
    const next =
      edge.next && edge.next.fields.collection === collection ? edge.next : null

    if (collection !== 'collections') {
      actions.createPage({
        path: `${collection}/${slug}`,
        component: require.resolve('./src/templates/single-post.js'),
        context: { id, prev, next },
      })
    }
  })

  // Create single tag pages
  const tags = tagData(data.tags.edges)
  tags.forEach((tag) => {
    const id = tag[0]
    actions.createPage({
      path: `tags/${id}`,
      component: require.resolve('./src/templates/single-tag.js'),
      context: { id },
    })
  })
}
