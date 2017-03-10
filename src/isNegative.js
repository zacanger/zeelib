// @flow

const isNegative = (x: number): bool =>
  +x === x && x < 0

export default isNegative
