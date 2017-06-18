// @flow

/**
 * Collapses consecutive whitespace to a single space
 * @example
 * collapseWhitespace('a\n\r\t\nb') // => 'a b'
 */

const collapseWhitespace = (str: string): string =>
  str.replace(/\s+/g, ' ')

export default collapseWhitespace
