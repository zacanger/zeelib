// @flow

/**
 * Collapses consecutive whitespace to a single space
 */

const collapseWhitespace = (str: string): string =>
  str.replace(/\s+/g, ' ')

export default collapseWhitespace
