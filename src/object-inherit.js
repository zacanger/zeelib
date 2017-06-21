// @flow

import clone from './clone'

const objectInherit = (target: Object, source: Object): void => {
  console.error('`objectInherit` is deprecated.')
  target.super_ = source
  target.prototype = Object.create(target.super_.prototype)
  let descriptor = clone(target.super_.descriptor) || {}
  descriptor.constructor = {
    value        : target,
    enumerable   : false,
    writable     : true,
    configurable : true
  }
  Object.defineProperties(target.prototype, descriptor)
}

export default objectInherit
