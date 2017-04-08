// @flow

const eq = (a: any, b: any): bool =>
  (a === undefined || b === undefined)
    ? false
    : JSON.stringify(a) === JSON.stringify(b)

export default eq
