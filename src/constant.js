// @flow

/**
 * Similar to `id` but takes another `any`
 * @example
 * constant(1)(() => {}) // => 1
 */

const constant = (a: any) =>
  (_: any) =>
    a

export default constant
