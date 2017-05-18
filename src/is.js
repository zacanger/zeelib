// @flow

/**
 * Returns true if the value is of the type
 * Example: `is(2, 'number')` -> `true`
 */

const is = (t: string, v: any): bool =>
  typeof v === t // eslint-disable-line valid-typeof

export default is
