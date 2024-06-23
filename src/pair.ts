/**
 * Make a pair out of any two values
 * @example
 * pair('a', 'b') // => [ 'a', 'b' ]
 */

/** @deprecated will be removed in v13 */
export const pair = <A, B>(first: A, second: B): [A, B] =>
  [ first, second ]
