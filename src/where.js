import filter from './filter'

const where = (arr, f) =>
  filter(arr, f)[0] || null

export default where
