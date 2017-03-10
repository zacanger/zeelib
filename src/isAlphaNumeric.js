// @flow

const isAlphaNumeric = (str: string): bool =>
  /[0-9a-zA-Z]+/.test(str)

export default isAlphaNumeric
