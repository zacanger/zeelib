// @flow

type res = void | Error

const assert = (exp: () => bool, message: ?string = 'Assertion Failed:'): res => {
  if (!exp) {
    throw new Error(message + exp.toString())
  }
}

export default assert
