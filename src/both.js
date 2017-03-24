// @flow

const both = (a: any[], b: any[]): any[] =>
  [...new Set(a.filter((el) => b.includes(el)))]

export default both
