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
      collections: allMdx(filter: { fields: { collection: { eq: "collections" } } }) {
        edges {
          node {
            id
            body
            internal {
              contentFilePath
            }
            frontmatter {
              name
              title
              coverAlt
              coverImage {
                publicURL
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
      posts: allMdx(
        filter: { fields: { collection: { in: ["blog", "project", "site"] } } }
      ) {
        edges {
          node {
            id
            internal {
              contentFilePath
            }
            frontmatter {
              slug
              date(formatString: "MM/DD/YYYY")
              featured
              draft
              name
              title
              tags
              excerpt
              coverAlt
              coverImage {
                publicURL
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
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
  // HOMEPAGE DATA
  //
  const allPosts = data.posts.edges

  // Filter out drafts
  const published = allPosts.filter((edge) => {
    const fm = edge.node.frontmatter
    return !fm.draft
  })

  // Sort newest → oldest
  const newestFirst = published.slice().sort((a, b) => {
    return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  })

  // Featured posts
  const featured = newestFirst
    .filter((edge) => edge.node.frontmatter.featured === true)
    .slice(0, 6)

  // Most recent posts
  const mostRecent = newestFirst.slice(0, 6)

  // Tags (same as before)
  const homepageTags = data.tags.edges

  //
  // PAGINATED LIST PAGES
  //
  const postsPerPage = 6
  const listEdges = data.posts.edges

  // Sort all posts by collection, then by date
  const sorted = listEdges.slice().sort((a, b) => {
    if (a.node.fields.collection < b.node.fields.collection) return -1
    if (a.node.fields.collection > b.node.fields.collection) return 1
    return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  })

  // Count posts per collection
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

    // All posts for this collection
    const postsForCollection = sorted.filter(
      (edge) => edge.node.fields.collection === groupName
    )

    // Find the matching collection metadata page
    const sitePage = data.collections.edges.find(
      (edge) => edge.node.frontmatter.name === groupName
    )

    Array.from({ length: numPages }).forEach((_, i) => {
      const postsForPage = postsForCollection.slice(
        i * postsPerPage,
        i * postsPerPage + postsPerPage
      )

      createPage({
        path: i === 0 ? `/${groupName}` : `/${groupName}/${i + 1}`,
        component: `${postListTemplate}?__contentFilePath=${sitePage.node.internal.contentFilePath}`,
        context: {
          posts: postsForPage,
          site: sitePage.node,
          numPages,
          currentPage: i + 1,
          collection: groupName,
          introFile: sitePage.node.internal.contentFilePath,
        },
      })
    })
  })

  //
  // SINGLE MDX PAGES (blog, project, site)
  //
  // const postEdges = data.posts.edges
  // const sortedPosts = postEdges.slice().sort((a, b) => {
  //   return new Date(a.node.frontmatter.date) - new Date(b.node.frontmatter.date)
  // })
  const sortedByCollection = sorted
  const collections = ['blog', 'project', 'site']

  collections.forEach((collection) => {
    const postsInCollection = sortedByCollection.filter(
      (edge) => edge.node.fields.collection === collection
    )

    postsInCollection.forEach((edge, index) => {
      const node = edge.node

      const previous =
        index > 0
          ? postsInCollection[index - 1].node // newer post
          : null

      const next =
        index < postsInCollection.length - 1
          ? postsInCollection[index + 1].node // older post
          : null

      const { slug } = node.frontmatter

      if (collection === 'collections') return

      const postTemplate = path.resolve('./src/templates/single-post.js')

      createPage({
        path: `${collection}/${slug}`,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          frontmatter: node.frontmatter,
          fields: node.fields,
          prev: previous,
          next: next,
          timeToRead: node.timeToRead,
        },
      })
    })
  })

  //
  // HOME PAGE
  //
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.js'),
    context: {
      mostRecent: mostRecent || [],
      featured: featured || [],
      tags: homepageTags || [],
    },
  })

  //
  // TAG PAGES
  //
  const tagEdges = tagData(data.tags.edges)
  tagEdges.forEach(([id, edges]) => {
    const tagTemplate = path.resolve('./src/templates/single-tag.js')

    // Filter posts by tag
    const postsWithTag = allPosts.filter((edge) =>
      edge.node.frontmatter.tags?.includes(id)
    )

    createPage({
      path: `tags/${id}`,
      component: tagTemplate,
      context: { id, posts: postsWithTag },
    })
  })
}
