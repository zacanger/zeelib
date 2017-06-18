// @flow

/**
 * Lex sort
 * @example
 * lexSort('asdf', 'asdf') // => 0
 * 'asdfghjkl'.split('').sort(lexSort).join('') // => 'adfghjls'
 */

const lexSort = (a: string, b: string): number =>
  a === b
    ? 0
    : a > b
      ? 1
      : -1

export default lexSort
