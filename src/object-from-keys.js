// @flow

/*
 * Build an object from an array of keys,
 * where the value is the same as the key.
 * @example
 * objectFromKeys([ 'FOO', 'BAR' ]) // => { FOO: 'FOO', BAR: 'BAR' }
 */

type O = { [string]: string }

const objectFromKeys = (arr: string[]): O =>
  arr.reduce((p: O, c: string): O => {
    p[c] = c
    return p
  }, {})

export default objectFromKeys
