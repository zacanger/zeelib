// @flow

/**
 * Remove non-ascii chars from string
 */

const removeNonAscii = (s: string): string =>
  s.replace(/[^\x20-\x7E]/g, '')

export default removeNonAscii
