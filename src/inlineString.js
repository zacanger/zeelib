// @flow

const inlineString = (str: string): string =>
  str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/[\s]+/gm, ' ')

export default inlineString
