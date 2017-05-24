// @flow

import each from './each'

/**
 * Takes an object and any other
 * arguments and mixes the two
 * @param {Object} original object
 * @param {any} other args
 * @returns {Object}
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
