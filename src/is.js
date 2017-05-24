// @flow

/**
 * Returns true if the value is of the type
 * Example: `is('number', 2)` -> `true`
 */

const is = (type: string, val: any): bool =>
  typeof val === type // eslint-disable-line valid-typeof

export default is
