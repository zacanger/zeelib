/**
 * Takes a function and returns a function that takes two arguments
 * Produces a curried function
 * @param {function} f
 * @param {any} a
 * @param {any} b
 * @returns {function}
 */

function curry2 (f) {
  function curried (a, b) {
    switch (arguments.length) {
      case 0: return curried
      case 1: return (b) => f(a, b)
      default: return f(a, b)
    }
  }
  return curried
}

export default curry2
