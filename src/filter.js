// @flow

import isArrayLike from './isArrayLike'
import each from './each'

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
