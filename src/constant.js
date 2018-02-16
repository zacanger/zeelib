// @flow

/**
 * Similar to `id` but takes another `any`
 * @example
 * constant(1)(() => {}) // => 1
 */

const constant = <T>(a: T) =>
  () =>
    a

export default constant
