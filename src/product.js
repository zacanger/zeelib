// @flow

const product = (a: number[]) : number =>
  a.reduce((acc, curr) => acc * curr, 1)

export default product
