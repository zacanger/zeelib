// @flow

/**
 * Returns true if value is a symbol
 * @example
 * isSymbol(Symbol.for('foo')) // => true
 */

const isSymbol = (a: any): bool =>
  typeof a === 'symbol'

export default isSymbol
