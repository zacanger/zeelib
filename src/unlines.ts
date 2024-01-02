/**
 * Join an array with lines
 * @example
 * unlines([ 'foo', 'bar' ]) // => 'foo\nbar'
 */

export const unlines = (arr: string[]): string =>
  arr.join('\n')
