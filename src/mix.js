// @flow

import each from './each'

/**
 * Takes an object and any other
 * arguments and mixes the two
 * @param {Object} original object
 * @param {any} other args
 * @returns {Object}
 * @example
 * mix({ a: 'a' }, { b: 'b' }) // => { a: 'a', b: 'b' }
 * mix({ a: 'a' }, [ 1, 2, 3 ]) // => { '0': 1, '1': 2, '2': 3, a: 'a' }
 */

function mix (): Object {
  const mixed = {}
  each(arguments, (obj) => {
    each(obj, (item, index) => {
      mixed[index] = item
    })
  })
  return mixed
}

export default mix
