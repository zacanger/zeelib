// @flow

const transpose = (matr: any[]): any[] => {
  console.error('`transpose` is deprecated.')
  return matr.map((r, ri) =>
    r.map((c, ci) => matr[ci][ri]))
}

export default transpose
