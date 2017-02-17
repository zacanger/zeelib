import take from './take'
import drop from './drop'

const splitAt = (n, a) =>
  [ take(n, a), drop(n, a) ]

export default splitAt
