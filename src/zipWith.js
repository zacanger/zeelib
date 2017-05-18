import map from './map'
import pair from './pair'

/**
 * Takes a function and two lists
 * Returns a list made by calling the function
 * on the elements of each list in the same position
 * @param {function} fn
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array}
 */

const zipWith = (fn, xs, ys) =>
  map((x, i) => fn.apply(fn, pair(x, ys[i])), xs)

export default zipWith
