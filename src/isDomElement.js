// @flow

import objectToString from './objectToString'

/**
 * Returns true if the value is a dom element
 */

const isDomElement = (v: any): bool =>
  objectToString.call(v).slice(8, 12) === 'HTML'

export default isDomElement
