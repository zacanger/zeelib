// @flow

import id from './id'
import filter from './filter'

/**
 * Returns an array or object with all falsey values removed
 * @param {Array|Object} a
 * @returns {Array|Object}
 * @example
 * keep([ 'a', null, '', 2]) // => [ 'a', 2 ]
 * keep({ a: '', b: null, c: 2 }) // => { c: 2 }
 */

const keep = (a) =>
  filter(id, a)

export default keep
