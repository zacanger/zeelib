// @flow

import span from './span'

/**
 * The opposite of `takeWhile`:
 * takes a predicate and array and returns an
 * array of the elements that didn't pass the predicate
 * @example
 * dropWhile(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

const dropWhile = (
  pred: () => bool,
  arr: any[]
): any[] =>
  span(pred, arr)[1] || []

export default dropWhile
