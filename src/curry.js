/**
 * Takes a function and returns a function that takes
 * any number of arguments
 * Produces a curried function
 * @param {function} fn
 * @param {any} args
 * @returns {function}
 * @example
 * const addThree = (a, b, c) => a + b + c
 * curry(addThree)(1)(1)(1) // => 3
 */

const curry = function (fn) {
  const getFunctionArguments = function (fn) {
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

        return args.filter((x) => x) // remove possible empty string from the result
      }
    }
  }

  const originalArguments = getFunctionArguments(fn) || []

  const makeCurriedFunc = function () {
    const givenArguments = arguments || []
    if (givenArguments.length < originalArguments.length) {
      return function (...rest) {
        return makeCurriedFunc(...givenArguments, ...rest)
      }
    } else {
      return fn(...givenArguments)
    }
  }

  return function () {
    return makeCurriedFunc(...arguments)
  }
}
export default curry
