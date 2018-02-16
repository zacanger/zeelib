// @flow

/**
 * Uncurry a function
 * @example
 * const addCurried = (a) => (b) => a + b
 * const add = uncurry(addCurried)
 * add(1, 2) // => 3
 */

const uncurry = (f: Function): Function =>
  (...args: mixed[]): mixed => {
    for (let arg: mixed of args) {
      if (typeof f !== 'function') {
        return f
      }
      f = f(arg)
    }
    return f
  }

export default uncurry
