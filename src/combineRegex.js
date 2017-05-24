/**
 * Takes a list of regular expressions and returns a single regular expression
 * [RegExp] -> RegEx
 * @param {array} rs List of RegExp
 * @param {string} opts string of regex opts
 * @returns {RegExp}
 */

const combineRegex = (rs, opts) =>
  new RegExp(rs.map((r) => r.source).join(''), opts)

export default combineRegex
