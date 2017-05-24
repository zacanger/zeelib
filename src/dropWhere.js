// @flow

/**
 * Drop where matches predicate
 * credit: gh:spicydonuts
 */

const dropWhere = (fn: any, array: any[]): any[] => {
  const keepers = []
  array.forEach((item, i) => {
    if (!fn(item, i)) {
      keepers.push(item)
    }
  })
  if (array.length === keepers.length) {
    return array
  }
  return keepers
}

export default dropWhere
