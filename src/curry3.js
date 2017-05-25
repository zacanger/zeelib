import curry2 from './curry2'

function curry3 (f) {
  console.error('`curry3` is deprecated. Please use `curry` instead.')
  function curried (a, b, c) {
    switch (arguments.length) {
      case 0: return curried
      case 1: return curry2((b, c) => f(a, b, c))
      case 2: return (c) => f(a, b, c)
      default:return f(a, b, c)
    }
  }
  return curried
}

export default curry3
