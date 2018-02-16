// @flow

/**
 * Splits an array into chunks
 * @example
 * chunk([1, 2, 3, 4 ], 2) // => [ [ 1, 2 ], [ 3, 4 ] ]
 */

const chunk = <T>(arr: T[], n: number): T[][] => {
  if (!arr.length || !n) return []
  return [ arr.slice(0, n) ].concat(chunk(arr.slice(n), n))
}

export default chunk
