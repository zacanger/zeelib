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
    let fun = f
    for (let arg: mixed of args) {
      if (typeof f !== 'function') {
        return f
      }
      fun = fun(arg)
    }
    return fun
  }

export default uncurry
