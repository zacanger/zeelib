// @flow

/**
 * Reverses array, fast
 * @example
 * reverse([ 1, 2, 3 ]) // => [ 3, 2, 1 ]
 */

const reverse = <A>(items: A[]): A[] => {
  const result = []
  for (let i: number = items.length - 1; i >= 0; i--) {
    result.push(items[i])
  }
  return result
}

export default reverse
