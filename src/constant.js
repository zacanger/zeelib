// @flow

/**
 * Similar to `id` but takes another `any`
 */

const constant = (x: any) =>
  (_: any) =>
    x

export default constant
