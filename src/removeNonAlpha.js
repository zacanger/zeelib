// @flow

const removeNonAlpha = (str: string) : string =>
  str.replace(/[^A-Za-z ]+/g, '')

export default removeNonAlpha
