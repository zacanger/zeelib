/* eslint-disable no-useless-escape */
// @flow

/**
 * Returns only alphanumeric characters
 */

const alphaNumericOnly = (str: string): string =>
  str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')

export default alphaNumericOnly
