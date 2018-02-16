// @flow

/**
 * Double an array until it's n long
 * @example
 * doubleUntil(2)([ 'hi' ]) // => [ 'hi', 'hi' ]
 */

const doubleUntil = (minSize: number = 0) =>
  function double (arr: *[]): *[] {
    if (arr.length >= minSize) {
      return arr
    }
    return double([ ...arr, ...arr ])
  }

export default doubleUntil
