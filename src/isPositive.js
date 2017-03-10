// @flow

const isPositive = (x: number): bool =>
  +x === x && x > 0

export default isPositive
