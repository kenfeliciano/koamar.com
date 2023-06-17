function flattenTags(tags) {
  let listOfTags = [,]
  tags.forEach((f) => {
    if (f.node.frontmatter.tags)
      f.node.frontmatter.tags.forEach((t) => {
        listOfTags.push(t)
      })
  })

  return listOfTags
}
function sortTags(allTags) {
  return allTags.sort()
}
function tagData(tags) {
  const flatTags = sortTags(flattenTags(tags))

  const tagSummary = flatTags.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})
  return Object.entries(tagSummary)
}

module.exports = tagData
