// @flow

/**
 * nco
 * @example
 * nco(null, 1) // => 1
 * nco(1, 2) // => 1
 */

const nco = (variable: any, defaultValue: any): any =>
  (variable === null || typeof variable === 'undefined') ? defaultValue : variable

export default nco
