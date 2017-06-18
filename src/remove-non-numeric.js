// @flow

/**
 * Remove non-numeric chars from string
 * @example
 * removeNonNumeric('asdf22\n!') // => '22'
 */

const removeNonNumeric = (str: string): string =>
  str.replace(/[^0-9-.]/g, '')

export default removeNonNumeric
