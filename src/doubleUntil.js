// doubleUntil(10)(['hi'])
const doubleUntil = (minSize = 0) =>
  function double (arr) {
    if (arr.length >= minSize) return arr
    return double([...arr, ...arr])
  }

export default doubleUntil
