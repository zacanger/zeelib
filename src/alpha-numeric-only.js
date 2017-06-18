/* eslint-disable no-useless-escape */
// @flow

/**
 * Returns only alphanumeric characters
 * @example
 * alphaNumericOnly('asdf1234!@#$') // => 'asdf1234'
 */

const alphaNumericOnly = (str: string): string =>
  str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')

export default alphaNumericOnly
