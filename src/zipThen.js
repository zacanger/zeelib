import zipWith from './zipWith'
import invoke from './invoke'

/**
 * Takes a function and a list, then another list
 * Returns the result of calling the function on the result
 * of calling zipWith on the lists
 * @param {function} after
 * @param {Array} xs
 * @param {Array} list
 * @returns {any}
 */

const zipThen = (after, xs) =>
  (...list) =>
    after.apply(after, zipWith(invoke, xs, list))

export default zipThen
