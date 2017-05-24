// @flow

/**
 * Transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
 */

const transpose = (matr: any[]): any[] =>
  matr.map((r, ri) =>
    r.map((c, ci) => matr[ci][ri]))

export default transpose
