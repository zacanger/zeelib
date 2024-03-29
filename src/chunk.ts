/**
 * Splits an array into chunks
 * @example
 * chunk([1, 2, 3, 4 ], 2) // => [ [ 1, 2 ], [ 3, 4 ] ]
 */

export const chunk = <T>(arr: T[], n: number): T[][] => {
  if ((arr.length === 0) || !n) return []
  return [ arr.slice(0, n) ].concat(chunk(arr.slice(n), n))
}
