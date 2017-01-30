const isInteger = Number.isInteger || function (n) {
  return (n | 0) === n
}

export default isInteger
