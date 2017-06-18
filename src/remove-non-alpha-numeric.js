// @flow

/**
 * Remove non-alphanumeric chars from string
 * @example
 * removeNonAlphaNumeric('asdlfkjsdf92r 2\n239wjefs ff!!sdf') // => 'asdlfkjsdf92r 2239wjefs ffsdf'
 */

const removeNonAlphaNumeric = (str: string): string =>
  str.replace(/[^A-Za-z0-9 ]+/g, '')

export default removeNonAlphaNumeric
