// @flow

// doubleUntil(10)(['hi'])
const doubleUntil = (minSize: number = 0) =>
  function double (arr : any[]): any[] {
    if (arr.length >= minSize) return arr
    return double([...arr, ...arr])
  }

export default doubleUntil
