// @flow

/**
 * Get the intersection of two arrays
 */

const intersection = (a: any[], b: any[]): any[] =>
  [...new Set(a.filter((el) => b.includes(el)))]

export default intersection
