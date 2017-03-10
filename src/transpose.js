// @flow

// transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
const transpose = (m: any[]): any[] =>
  m.map((r, ri) =>
    r.map((c, ci) => m[ci][ri]))

export default transpose
