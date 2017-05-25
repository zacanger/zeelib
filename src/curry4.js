import curry2 from './curry2'
import curry3 from './curry3'

function curry4 (f) {
  console.error('`curry4` is deprecated. Please use `curry` instead.')
  function curried (a, b, c, d) { // eslint-disable-line complexity
    switch (arguments.length) {
      case 0: return curried
      case 1: return curry3((b, c, d) => f(a, b, c, d))
      case 2: return curry2((c, d) => f(a, b, c, d))
      case 3: return (d) => f(a, b, c, d)
      default: return f(a, b, c, d)
    }
  }
  return curried
}

export default curry4
