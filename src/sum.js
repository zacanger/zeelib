// @flow

const sum = (a: number[]) : number =>
  a.reduce((acc, cur) => acc + cur, 0)

export default sum
