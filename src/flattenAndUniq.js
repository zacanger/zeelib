// @flow

const flattenAndUniq = (a: any[]): any[] =>
  [ ...new Set(a.map(({ b }) => b)) ]

export default flattenAndUniq
