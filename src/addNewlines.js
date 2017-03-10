// @flow

// add \n to every line
const addNewlines = (s: string): string =>
  s.split('\t').join('  ').split('\n').map((e) => e + '\n').join('')

export default addNewlines
