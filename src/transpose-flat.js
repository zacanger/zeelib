// @flow

/**
 * Transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
 */

const transposeFlat = (
  matr: any[],
  l: number = Math.sqrt(matr.length) | 0
): any[] =>
  matr.map((c, i) =>
    matr[(i % l) * l + i / l | 0])

export default transposeFlat
