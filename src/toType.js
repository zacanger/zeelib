/**
 * Get the type of value
 * @param {any} value
 * @returns {string} type
 */

const toType = (v) =>
  ({}).toString.call(v).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

export default toType
