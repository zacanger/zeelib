/**
 * Trims a string to just abbreved caps
 * @param {string} str
 * @returns {string}
 */

const abbrev = (str) =>
  str.match(/\b([A-Z])/g)
    ? str.match(/\b([A-Z])/g).join('')
    : str

export default abbrev
