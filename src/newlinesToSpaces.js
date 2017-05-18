// @flow

/**
 * Turns each newline into a space
 */

const newlinesToSpaces = (str: string): string =>
  str.replace(/\s+/g, ' ').trim()

export default newlinesToSpaces
