// @flow

/**
 * Takes a value and an optional failure message
 * and asserts truthiness
 * @example
 * assert(false) // => Error: Assertion Failed: false
 * assert(true) // => undefined
 * assert(false, 'NOPE') // => Error: NOPE false
 */

const assert = (
  exp: *,
  message: string = 'Assertion Failed:'
): void => {
  if (!exp) {
    throw new Error(message + ' ' + exp.toString())
  }
}

export default assert
