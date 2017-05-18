// @flow

/**
 * Splits an array into chunks
 */

const chunk = (arr: any[], n: number): any[] => {
  if (!arr.length || !n) return []
  return [ arr.slice(0, n) ].concat(chunk(arr.slice(n), n))
}

export default chunk
