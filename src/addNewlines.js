// @flow

/**
 * Adds `\n` to every line
 */

const addNewlines = (str: string): string =>
  str
    .split('\t')
    .join('  ')
    .split('\n')
    .map((e) => e + '\n')
    .join('')

export default addNewlines
