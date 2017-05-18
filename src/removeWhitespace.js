// @flow

/**
 * Remove all whitespace from string
 */

const removeWhitespace = (str: string): string =>
  str.replace(/^\s+|\s+$/, '')

export default removeWhitespace
