// @flow

const hasDuplicate = (a: any[]): bool =>
  a.some((v, i, s) => s.indexOf(v) !== i)

export default hasDuplicate
