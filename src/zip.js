import map from './map'
import pair from './pair'

/**
 * Makes a list of tuples
 * Each tuple is the elements of each passed array
 * at the same position
 * @param {Array} xs
 * @param {Array} l
 * @returns {Array}
 */

const zip = (xs, l) => map((x, i) => pair(x, l[i]), xs)
export default zip
