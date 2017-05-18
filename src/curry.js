import getFunctionArguments from './getFunctionArguments'

/**
 * Takes a function and returns a function that takes
 * any number of arguments
 * Produces a curried function
 * @param {function} any
 * @param {any} args
 * @returns {function} curried
 */

const curry = function (fn) {
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
