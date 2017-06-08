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
    const givenArguments = [ ...args ] || []
    return givenArguments.length < originalArguments.length
      ? (...rest) => makeCurriedFunc(...givenArguments, ...rest)
      : fn(...givenArguments)
  }

  return (...args) => makeCurriedFunc(...args)
}

export default curry
