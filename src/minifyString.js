// @flow

/**
 * Roughly minify a string
 */

const minifyString = (str: string): string =>
  str.replace(/\n/g, '').replace(/\s\s+/g, ' ')

export default minifyString
