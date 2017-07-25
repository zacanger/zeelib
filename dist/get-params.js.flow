// @flow

/**
 * Get a function's parameters by name
 * @example
 * const thing = (a, b, c) => a + b + c
 * getParams(thing) // => [ 'a', 'b', 'c' ]
 */

const getParams = (fn: (any) => any): string[] => {
  const s = fn.toString()
  return s.slice(s.indexOf('(') + 1, s.indexOf(')')).match(/([^\s,]+)/g) || []
}

export default getParams
