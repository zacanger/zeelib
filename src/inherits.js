// @flow

/**
 * Simple `inherits`
 * @example
 * inherits(A, B)
 */

function inherits (a: any, b: any): any {
  function c () {}
  c.prototype = b.prototype
  a.prototype = new c // eslint-disable-line
}

export default inherits
