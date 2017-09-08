// @flow

/**
 * Find all indices of an item in an array
 * @example
 * findIndices(1, [ 1, 2, 1 ]) // => [ 0, 2 ]
 */

const findIndices = (el: any, arr: any[]): number[] =>
  arr.reduce((a, e, i) => {
    if (e === el) {
      a.push(i)
    }
    return a
  }, [])

export default findIndices
