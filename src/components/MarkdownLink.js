import * as React from 'react'
import PropTypes from 'prop-types'
import { InternalLink, ExternalLink } from '.'

// Checks against absolute URLs that share 👇 so we can still pass it along to Gatsby's internal link component
const domainRegex = /http[s]*:\/\/[www.]*koamar\.com[/]?/
// @NOTE We can use a REGEX like this for URLs we want to be treated as external which could be used for Netlify redirects
// /http[s]*:\/\/[www.]*YOURDOMAIN\.com(?!\/i-am-external|\/me-too)[/]?/

export const MarkdownLink = ({ href, ...rest }) => {
  const sameDomain = domainRegex.test(href)

  if (sameDomain) {
    href = href.replace(domainRegex, '/')
  }

  if (
    href.startsWith('#') ||
    href.startsWith('../') ||
    href.startsWith('./') ||
    href.startsWith('/')
  ) {
    // return <a href={href} {...rest} />
    return <InternalLink href={href} {...rest} />
  }

  // Treat urls that aren't web protocols as "normal" links
  if (!href.startsWith('http')) {
    return <a href={href} {...rest} /> // eslint-disable-line jsx-a11y/anchor-has-content
  }

  return <ExternalLink href={href} {...rest} />
}

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
}
