import zipWith from './zipWith'
import invoke from './invoke'

/**
 * Takes a function and a list, then another list
 * Returns the result of calling the function on the result
 * of calling zipWith on the lists
 * @param {function} after
 * @param {Array} xs
 * @param {Array} ys
 * @returns {any}
 */

const zipThen = (after, xs) =>
  (...ys) =>
    after.apply(after, zipWith(invoke, xs, ys))

export default zipThen
