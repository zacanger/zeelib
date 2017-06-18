// @flow

/**
 * Remove non-ascii chars from string
 * @example
 * removeNonAscii('asdf!!\n\r\t\ns') // => 'asdf!!s'
 */

const removeNonAscii = (str: string): string =>
  str.replace(/[^\x20-\x7E]/g, '')

export default removeNonAscii
