/**
 * Get the type of value
 * @param {any} val
 * @returns {string}
 */

const toType = (val) =>
  ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

export default toType
