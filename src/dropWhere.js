// @flow

/**
 * Drop where matches predicate
 * credit: gh:spicydonuts
 */

const dropWhere = (fn: any, arr: any[]): any[] => {
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
