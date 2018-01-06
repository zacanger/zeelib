// @flow

import objectToString from './object-to-string'

/**
 * Returns true if the value is a dom element
 * @example
 * isDomElement(document.getElementById('foo')) // => true
 */

const isDomElement = (v: mixed): bool =>
  objectToString(v).slice(8, 12) === 'HTML'

export default isDomElement
