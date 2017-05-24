// @flow

/**
 * Get the intersection of two arrays
 */

const intersection = (xs: any[], ys: any[]): any[] =>
  [...new Set(xs.filter((el) => ys.includes(el)))]

export default intersection
