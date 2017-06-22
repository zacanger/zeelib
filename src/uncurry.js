// @flow

/**
 * Uncurry a function
 * @example
 * const addCurried = (a) => (b) => a + b
 * const add = uncurry(addCurried)
 * add(1, 2) // => 3
 */

const uncurry = (f: () => any) =>
  (a: any, b: any): any =>
    f(a)(b)

export default uncurry
