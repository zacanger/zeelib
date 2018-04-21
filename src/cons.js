// @flow

/**
 * `cons`
 * @example
 * cons(1, [ 2, 3, 4 ]) // => [ 1, 2, 3, 4 ]
 */

const cons = (el: *, arr: *[]): *[] =>
  [ el, ...arr ]

export default cons
