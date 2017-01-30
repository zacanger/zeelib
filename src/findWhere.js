// credit: gh:spicydonuts
const findWhere = (fn, array) => {
  let found = null
  array.some((item, i) => {
    if (fn(item, i)) {
      found = item
      return true
    }
    return false
  })
  return found
}

export default findWhere
