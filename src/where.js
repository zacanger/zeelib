import filter from './filter'

const where = (arr, f) => {
  console.error('`where` is deprecated. Please use `findWhere instead.`')
  return filter(f, arr)[0] || null
}

export default where
