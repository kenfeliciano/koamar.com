const path = require('path')
const tagData = require('./src/utils/tagData')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
    createNodeField({
      name: 'collection',
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: 'defaultFalse',
    extend() {
      return {
        resolve(source, args, context, info) {
          return source[info.fieldName] == null ? false : source[info.fieldName]
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
  const { createPage } = actions

  const { data } = await graphql(`
    query CreatePagesQuery {
      pages: allMdx {
        edges {
          node {
            id
            internal {
              contentFilePath
            }
            frontmatter {
              slug
              date
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

  //
  // PAGINATED LIST PAGES
  //
  const postsPerPage = 6
  const edges = data.pages.edges

  const sorted = edges.slice().sort((a, b) => {
    if (a.node.fields.collection < b.node.fields.collection) return -1
    if (a.node.fields.collection > b.node.fields.collection) return 1
    return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  })

  const countByCollection = (arr, val) =>
    arr.reduce((acc, edge) => (edge.node.fields.collection === val ? acc + 1 : acc), 0)

  const groups = [
    { groupName: 'blog', count: countByCollection(sorted, 'blog') },
    { groupName: 'project', count: countByCollection(sorted, 'project') },
    { groupName: 'site', count: countByCollection(sorted, 'site') },
  ]

  groups.forEach(({ groupName, count }) => {
    const numPages = Math.ceil(count / postsPerPage)
    const postListTemplate = path.resolve('./src/templates/post-list.js')

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${groupName}` : `/${groupName}/${i + 1}`,
        component: postListTemplate,
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

  //
  // SINGLE MDX PAGES (blog, project, site)
  //
  edges.forEach(({ node, next, previous }) => {
    const { slug } = node.frontmatter
    const { collection } = node.fields

    if (collection === 'collections') return

    const postTemplate = path.resolve('./src/templates/single-post.js')

    createPage({
      path: `${collection}/${slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        prev: previous && previous.fields.collection === collection ? previous : null,
        next: next && next.fields.collection === collection ? next : null,
      },
    })
  })

  //
  // TAG PAGES
  //
  const tags = tagData(data.tags.edges)
  tags.forEach(([id]) => {
    const tagTemplate = path.resolve('./src/templates/single-tag.js')
    createPage({
      path: `tags/${id}`,
      component: tagTemplate,
      context: { id },
    })
  })
}
