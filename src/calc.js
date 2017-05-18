// @flow

/**
 * Takes an operation in string form
 * and returns a function that takes any number of arguments
 */

function calc (op: string) {
  return function (): number {
    return [].reduce.call(arguments, op)
  }
}

export default calc
