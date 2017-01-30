import greatestCommonDivisor from './greatestCommonDivisor'

// returns least common multiple
function leastCommonMultiple () {
  let i = arguments.length
  let a = arguments[--i]
  while (a && i) {
    let b = arguments[--i]
    a = a * b / greatestCommonDivisor(a, b)
  }
  return a
}

export default leastCommonMultiple
