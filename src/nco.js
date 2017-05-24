// @flow

/**
 * nco
 * cred: gh:artificerentertainment
 */

const nco = (variable: any, defaultValue: any): any =>
  (variable === null || typeof variable === 'undefined') ? defaultValue : variable

export default nco
