/**
 * Returns the last element of the array
 * @example
 * last([ 1, 2, 3 ]) // => 3
 */

const last = <A>(arr: A[]): A =>
  arr[arr.length - 1]

export default last
