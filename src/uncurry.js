// @flow

type AnyF = (any) => any

/**
 * Uncurry a function
 * @example
 * const addCurried = (a) => (b) => a + b
 * const add = uncurry(addCurried)
 * add(1, 2) // => 3
 */

const uncurry = (f: AnyF): AnyF => {
  if (typeof f !== 'function' || f.length === 0) {
    return f
  }

  return (...args) => {
    for (let arg of args) {
      if (typeof f !== 'function') {
        return f
      }
      f = f(arg)
    }
    return f
  }
}

export default uncurry
