// @flow

const generateSequence = (n: number, p: any): any[] =>
  Array(n).fill().map((_, i) =>
    typeof p === 'function' ? p(n, i) : p)

export default generateSequence
