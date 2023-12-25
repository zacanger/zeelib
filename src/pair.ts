/**
 * Make a pair out of any two values
 * @example
 * pair('a', 'b') // => [ 'a', 'b' ]
 */

const pair = <A, B>(first: A, second: B): [A, B] =>
  [ first, second ]

export default pair
