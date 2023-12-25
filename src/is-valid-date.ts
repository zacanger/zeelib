import isDate from './is-date'

/**
 * Returns true if the passed object is a valid Date
 * @example
 * isValidDate('1234') // => false
 */

const isValidDate = (d: Date): boolean =>
  isDate(d) && d.toString() !== 'Invalid Date'

export default isValidDate
