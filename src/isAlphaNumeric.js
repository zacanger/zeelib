// @flow

/**
 * Returns true if the string is alphanumeric
 */

const isAlphaNumeric = (str: string): bool =>
  /[0-9a-zA-Z]+/.test(str)

export default isAlphaNumeric
