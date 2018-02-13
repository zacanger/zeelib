// @flow

import isArrayLike from './is-array-like'
import each from './each'

/**
 * `filter` for array and object
 * @example
 * filter(id, [ 1, 2 ]) // => [ 1, 2 ]
 * filter(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 1, 2 ]
 * filter(lessThanThree, { a: 1, b: 4 }) // =>  { a: 1 }
 */

const filter = (
  fn: ((mixed) => bool, ?number) => bool,
  list: mixed[] | Object
): Object | mixed[] => {
  const isArr = isArrayLike(list)
  const filtered = isArr ? [] : {}

  each(list, (item, index) => {
    if (fn(item, index)) {
      const idx = isArr ? filtered.length : index
      filtered[idx] = item
    }
  })

  return filtered
}

export default filter
