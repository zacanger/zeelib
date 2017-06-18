// @flow

/**
 * Drop where matches predicate
 * credit: gh:spicydonuts
 * @example
 * dropWhere(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

const dropWhere = (fn: any, arr: any[]): any[] => {
  console.error('`dropWhere` is deprecated. Please use `dropWhile`.')
  const keepers = []
  arr.forEach((item, i) => {
    if (!fn(item, i)) {
      keepers.push(item)
    }
  })
  if (arr.length === keepers.length) {
    return arr
  }
  return keepers
}

export default dropWhere
