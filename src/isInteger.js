// @flow

const isInteger = Number.isInteger || function (n: number): bool {
  console.error('`isInteger` is depreacted. Please use `Number.isInteger` instead.')
  return (n | 0) === n
}

export default isInteger
