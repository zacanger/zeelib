import map from './map'
import pair from './pair'

const zipWith = (fn, xs, arr) =>
  map((x, i) => fn.apply(fn, pair(x, arr[i])), xs)

export default zipWith
