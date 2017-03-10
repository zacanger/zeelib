// @flow

const minifyString = (str: string): string =>
  str.replace(/\n/g, '').replace(/\s\s+/g, ' ')

export default minifyString
