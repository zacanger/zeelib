// @flow

/**
 * Roughly minify a string
 */

const minifyString = (str: string): string => {
  console.error('`minifyString` is depreacted. Please use `collapseWhitespace` instead.')
  return str.replace(/\n/g, '').replace(/\s\s+/g, ' ')
}

export default minifyString
