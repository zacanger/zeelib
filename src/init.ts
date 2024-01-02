/**
 * Returns all but the last item of an array
 * @example
 * init([ 1, 2, 3 ]) // => [ 1, 2 ]
 */

export const init = (arr: any[]): any[] =>
  arr.slice(0, -1)
