/**
 * Returns true if the string is contained somewhere in the array
 * @example
 * isStringSomewhereInArray('a', [ 'asdf' ]) // => true
 */

const isStringSomewhereInArray = (el: string, arr: string[]): boolean =>
  arr.some((a) => {
    const x = el.toLowerCase()
    const y = a.toLowerCase()
    return x.includes(y) || y.includes(x)
  })

export default isStringSomewhereInArray
