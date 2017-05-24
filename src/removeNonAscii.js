// @flow

/**
 * Remove non-ascii chars from string
 */

const removeNonAscii = (str: string): string =>
  str.replace(/[^\x20-\x7E]/g, '')

export default removeNonAscii
