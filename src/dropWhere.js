// credit: gh:spicydonuts
const dropWhere = (fn, array) => {
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
