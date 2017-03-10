// @flow

import each from './each'

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
