/**
 * Takes a function and returns a function that takes
 * any number of arguments
 * Produces a curried function
 * @param {function} fn
 * @param {any} args
 * @returns {function}
 */

const curry = (fn) => {
  const originalArguments = fn
    .toString()
    .match(/\(.*?\)/)[0]
    .replace(/[()]/gi, '')
    .replace(/\s/gi, '')
    .split(',')
    .filter((x) => x)

  const makeCurriedFunc = (...args) => {
    const givenArguments = [...args] || []
    if (givenArguments.length < originalArguments.length) {
      return (...rest) =>
        makeCurriedFunc(...givenArguments, ...rest)
    } else {
      return fn(...givenArguments)
    }
  }

  return (...args) => makeCurriedFunc(...args)
}

export default curry
