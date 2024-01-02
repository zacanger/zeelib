/**
 * Split a string on lines
 * @example
 * lines('foo\nbar') // => [ 'foo', 'bar' ]
 */

export const lines = (str: string): string[] =>
  str.split('\n')
