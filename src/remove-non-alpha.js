// @flow

/**
 * Remove non-alpha chars from string
 * @example
 * removeNonAlpha('asdf 22 a') // => 'asdf  a'
 */

const removeNonAlpha = (str: string): string =>
  str.replace(/[^A-Za-z ]+/g, '')

export default removeNonAlpha
