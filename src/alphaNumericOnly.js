/* eslint-disable no-useless-escape */
const alphaNumericOnly = (str) =>
  str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')
export default alphaNumericOnly
