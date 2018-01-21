// @flow

import isDate from './is-date'

/**
 * Returns true if the passed object is a valid Date
 * @example
 * isValidDate('1234') // => false
 */

const isValidDate = (d: Date): bool =>
  isDate(d) && d.toString() !== 'Invalid Date'

export default isValidDate
