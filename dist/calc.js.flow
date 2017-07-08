// @flow

/**
 * Takes an operation as a function
 * and returns a function that takes any number of arguments
 * @example
 * calc(add)(1, 2, 3) // => 6
 */

const calc = (op: (number) => number) =>
  (...args: number[]): number =>
    [].reduce.call(args, op)

export default calc
