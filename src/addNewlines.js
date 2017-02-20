// add \n to every line
const addNewlines = (s) =>
  s.split('\t').join('  ').split('\n').map((e, i, a) => e + '\n')
export default addNewlines
