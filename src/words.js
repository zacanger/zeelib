// @flow

/**
 * Split a string on spaces
 * @example
 * words('foo bar') // => [ 'foo', 'bar' ]
 */

const words = (str: string): string[] =>
  str.split(' ')

export default words
