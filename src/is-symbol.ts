/**
 * Returns true if value is a symbol
 * @example
 * isSymbol(Symbol.for('foo')) // => true
 */

export const isSymbol = (a: any): boolean =>
  typeof a === 'symbol'
