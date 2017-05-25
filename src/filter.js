// @flow

import isArrayLike from './is-array-like'
import each from './each'

/**
 * `filter` for array and object
 */

function filter (list: any[], fn: any): Object | any[] {
  const isArr = isArrayLike(list)
  const filtered = isArr ? [] : {}

  each(list, (item, index) => {
    if (fn(item, index)) {
      if (isArr) {
        index = filtered.length
      }
      filtered[index] = item
    }
  })

  return filtered
}

export default filter
