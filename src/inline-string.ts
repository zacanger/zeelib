/**
 * Turns all newlines into a single space
 * @example
 * inlineString('asdfasdf \n\n asdfasdf') // => 'asdfasdf asdfasdf'
 */

const inlineString = (str: string): string =>
  str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/[\s]+/gm, ' ')

export default inlineString
