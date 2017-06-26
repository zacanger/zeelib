import id from './id'
import filter from './filter'

const compact = (a) => {
  console.error('`compact` is deprecated. Use `keep`.')
  return filter(id, a)
}

export default compact
