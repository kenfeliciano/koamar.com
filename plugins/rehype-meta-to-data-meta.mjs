// rehype-meta-to-data-meta.js
import { visit } from 'unist-util-visit'

export default function rehypeMetaToDataMeta() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'code') return

      const meta = node.data && node.data.meta
      if (!meta) return

      node.properties = node.properties || {}
      node.properties['data-meta'] = meta
    })
  }
}
