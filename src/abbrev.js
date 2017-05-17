/**
 * Trims a string to just abbreved caps
 * @param {string} any string
 * @returns {string} string, abbreviated
 */

const abbrev = (s) =>
  s.match(/\b([A-Z])/g) ? s.match(/\b([A-Z])/g).join('') : s

export default abbrev
