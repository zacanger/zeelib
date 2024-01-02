/**
 * Split a string on spaces
 * @example
 * words('foo bar') // => [ 'foo', 'bar' ]
 */

export const words = (str: string): string[] =>
  str ? str.split(' ') : []
