/**
 * Find all indices of an item in an array
 * @example
 * findIndices(1, [ 1, 2, 1 ]) // => [ 0, 2 ]
 */

export const findIndices = (el: any, arr: any[]): number[] =>
  arr.reduce((a, e, i): number[] => {
    if (e === el) {
      a.push(i)
    }
    return a
  }, [])
