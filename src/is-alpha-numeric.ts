/**
 * Returns true if the string is alphanumeric
 * @example
 * isAlphaNumeric('asdf1234') // => true
 * isAlphaNumeric('!') // => false
 */

const isAlphaNumeric = (str: string): boolean =>
  /[0-9a-zA-Z]+/.test(str)

export default isAlphaNumeric
