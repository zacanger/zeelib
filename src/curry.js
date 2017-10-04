// @flow

/**
 * Takes a function and returns a function that takes
 * any number of arguments
 *
 * Produces a curried function
 * @param {function} fn
 * @param {any} args
 * @returns {function}
 * @example
 * const addThree = (a, b, c) => a + b + c
 * curry(addThree)(1)(1)(1) // => 3
 */

const curry = (fn: (...any) => any) => {
  const getFunctionArguments = (fn) => {
    if (typeof fn !== 'function') {
      throw new TypeError(`Expected argument to be a function! Received a ${typeof fn}.`)
    }

    const functionAsString = fn.toString()

    if (functionAsString) {
      const m = functionAsString.match(/\(.*?\)/)
      if (m && m[0]) {
        const args = m[0] // match everything between brackets
          .replace(/[()]/gi, '') // remove brackets
          .replace(/\s/gi, '') // remove all whitespace
          .split(',') // split on the commas

        return args.filter((a) => a) // remove possible empty string from the result
      }
    }
  }

  const originalArguments = getFunctionArguments(fn) || []

  const makeCurriedFunc = (...args: any[]) => {
    const givenArguments = args || []
    return givenArguments.length < originalArguments.length
      ? (...rest: any[]) => makeCurriedFunc(...givenArguments, ...rest)
      : fn(...givenArguments)
  }

  return (...args: any[]) => makeCurriedFunc(...args)
}
export default curry
