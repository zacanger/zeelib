// @flow

/**
 * Collapses multiple newlines to two
 * @example
 * collapseNewlines('\n\n\n\n') // => '\n\n'
 */

const collapseNewlines = (str: string): string =>
  str.replace(/\n\s*\n/g, '\n\n')

export default collapseNewlines
