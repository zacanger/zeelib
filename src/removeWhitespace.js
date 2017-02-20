// @flow

const removeWhitespace = (str: string) : string =>
  str.replace(/^\s+|\s+$/, '')

export default removeWhitespace
