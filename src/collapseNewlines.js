// @flow

/**
 * Collapses multiple newlines to two
 */

const collapseNewlines = (str: string): string =>
  str.replace(/\n\s*\n/g, '\n\n')

export default collapseNewlines
