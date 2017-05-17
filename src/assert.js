// @flow

type res = void | Error

/**
 * Takes a value and an optional failure message
 * and asserts truthiness
 */

const assert = (
  exp: any,
  message: ?string = 'Assertion Failed:'
): res => {
  if (!exp) {
    throw new Error(message + exp.toString())
  }
}

export default assert
