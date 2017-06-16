// @flow

/**
 * Adds `\n` to every line
 * @example
 * addNewlines('asdf asdf') // => 'asdf asdf\n'
 */

const addNewlines = (str: string): string =>
  str
    .split('\t')
    .join('  ')
    .split('\n')
    .map((e) => e + '\n')
    .join('')

export default addNewlines
