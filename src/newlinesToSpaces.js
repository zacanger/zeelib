// @flow

const newlinesToSpaces = (str: string) : string =>
  str.replace(/\s+/g, ' ').trim()

export default newlinesToSpaces
