import isArrayLike from './isArrayLike'
import each from './each'

function filter (list, fn) {
  const
    isArr    = isArrayLike(list)
  , filtered = isArr ? [] : {}

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
