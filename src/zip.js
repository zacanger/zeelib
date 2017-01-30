import map from './map'
import pair from './pair'

const zip = (xs, l) => map((x, i) => pair(x, l[i]), xs)
export default zip
