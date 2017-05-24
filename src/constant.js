// @flow

/**
 * Similar to `id` but takes another `any`
 */

const constant = (a: any) =>
  (_: any) =>
    a

export default constant
