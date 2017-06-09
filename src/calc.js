// @flow

/**
 * Takes an operation as a function
 * and returns a function that takes any number of arguments
 */

const calc = (op: (number) => number) =>
  (...args: number[]): number =>
    [].reduce.call(args, op)

export default calc
