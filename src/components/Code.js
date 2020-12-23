import * as React from 'react'
import { useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import { TitleContainer, CopyCode, ThemeContext } from '../components'
import copyToClipboard from '../utils/copy-to-clipboard.js'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

const calculateLinesToHighlight = (meta) => {
  const LINE_NUMBERS_TEST = /{([\d,-]+)}/
  if (!LINE_NUMBERS_TEST.test(meta)) {
    return () => false
  }
  const lineNumbers = LINE_NUMBERS_TEST.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

const getParams = (language = ``) => {
  const [lang = ``, params = ``] = language.split(`:`)
  return [lang.split(`language-`).pop().split(`{`).shift()].concat(
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      merged[key] = value
      return merged
    }, {})
  )
}

export const Code = ({ codeString, noLineNumbers = false, language, metastring, ...props }) => {
  const { theme } = useContext(ThemeContext)
  console.log({ theme })
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const hasLineNumbers = !noLineNumbers && language !== `noLineNumbers`
  const [lang, { title = `` }] = getParams(language)
  const handleClick = () => {
    copyToClipboard(codeString)
  }
  if (props['react-live']) {
    return (
      <>
        {title && <TitleContainer>{title}</TitleContainer>}
        <LiveProvider code={codeString} noInline={true} theme={theme === 'dark' ? nightOwl : nightOwlLight}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </>
    )
  }

  return (
    <>
      {title && <TitleContainer>{title}</TitleContainer>}
      <Highlight
        {...defaultProps}
        code={codeString}
        language={lang}
        theme={theme === 'dark' ? nightOwl : nightOwlLight}
        {...props}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className='gatsby-highlight' data-language={language}>
            <pre className={className} style={style}>
              <CopyCode onClick={handleClick}>Copy</CopyCode>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }
                return (
                  <div {...lineProps}>
                    {hasLineNumbers && <span className='line-number-style'>{i + 1}</span>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        )}
      </Highlight>
    </>
  )
}
