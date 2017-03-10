// @flow

const removeNonNumeric = (str: string): string =>
  str.replace(/[^0-9-.]/g, '')

export default removeNonNumeric
