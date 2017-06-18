// @flow

/**
 * Applys f to arg
 * @example
 * apply(lessThanThree, 1) // => true
 */

const apply = (f: (any) => any, x: any): any =>
  f(x)

export default apply
