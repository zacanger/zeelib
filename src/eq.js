// @flow

/**
 * `eq`
 */

const eq = (a: any, b: any): bool =>
  a === b
    ? true
    : (a === undefined || b === undefined)
      ? false
      : JSON.stringify(a) === JSON.stringify(b)

export default eq
