// @flow

import isDate from './is-date'

/**
 * Returns true if the passed object is a valid Date
 */

const isValidDate = (d: any): bool =>
  isDate(d) && d.toString() !== 'Invalid Date'

export default isValidDate
