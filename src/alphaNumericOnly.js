/* eslint-disable no-useless-escape */
// @flow

const alphaNumericOnly = (str: string): string =>
  str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')

export default alphaNumericOnly
