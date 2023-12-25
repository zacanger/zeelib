/**
 * Combines regular expressions
 * @example
 * combineRegex([/[a-z]/, /[0-9]], 'g') ==> /[a-z][0-9]/g
 */

const combineRegex = (rs: RegExp[], opts: string = ''): RegExp =>
  new RegExp(rs.map((r) => r.source).join(''), opts)

export default combineRegex
