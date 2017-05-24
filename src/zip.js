import map from './map'
import pair from './pair'

/**
 * Makes a list of tuples
 * Each tuple is the elements of each passed array
 * at the same position
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array}
 */

const zip = (xs, ys) => map((x, i) => pair(x, ys[i]), xs)
export default zip
