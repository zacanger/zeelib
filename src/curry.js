// @flow

import id from './id'

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

/* eslint-disable no-redeclare, max-len, flowtype/require-return-type */
declare function curry<T>(() => T): () => T
declare function curry<A, T>((A) => T): (A) => T
declare function curry<A, B, T>((A, B) => T): (A) => (B) => T
declare function curry<A, B, C, T>((A, B, C) => T): (A) => (B) => (C) => T
declare function curry<A, B, C, D, T>((A, B, C, D) => T): (A) => (B) => (C) => (D) => T
declare function curry<A, B, C, D, E, T>((A, B, C, D, E) => T): (A) => (B) => (C) => (D) => (E) => T
declare function curry<A, B, C, D, E, F, T>((A, B, C, D, E, F) => T): (A) => (B) => (C) => (D) => (E) => (F) => T
declare function curry<A, B, C, D, E, F, G, T>((A, B, C, D, E, F, G) => T): (A) => (B) => (C) => (D) => (E) => (F) => (G) => T
declare function curry(Function): Function

function curry (fn) {
  const getFunctionArguments = (fn): string[] => {
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

        return args.filter(id) // remove possible empty string from the result
      }
    }
    return []
  }

  const originalArguments = getFunctionArguments(fn)

  const makeCurriedFunc = (...args) => {
    const givenArguments = args || []
    return givenArguments.length < originalArguments.length
      ? (...rest) => makeCurriedFunc(...givenArguments, ...rest)
      : fn(...givenArguments)
  }

  return (...args) => makeCurriedFunc(...args)
}
/* eslint-enable no-redeclare, max-len, flowtype/require-return-type */

export default curry
