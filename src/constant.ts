/**
 * Similar to `id` but takes another `T`
 * @example
 * constant(1)(() => {}) // => 1
 */

const constant = <T>(a: T) =>
  () =>
    a

export default constant
