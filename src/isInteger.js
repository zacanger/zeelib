// @flow

const isInteger = Number.isInteger || function (n: number) : bool {
  return (n | 0) === n
}

export default isInteger
