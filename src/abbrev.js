// @flow

/**
 * Trims a string to just abbreved caps
 * @param {string} str
 * @returns {string}
 * @example
 * abbrev('Zacary Erik Anger') // => 'ZEA'
 */

const abbrev = (str: string): string => {
  const a = str.match(/\b([A-Z])/g)
  return a ? a.join('') : str
}

export default abbrev
