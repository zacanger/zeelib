// @flow

import copyWithout from './copy-without'

/**
 * Clones an object, leaving out specified keys
 * cred : gh:texastoland
 * `{ key, ...clone } = source`
 */

const cloneWithout = (source: Object, ...keys: any): any =>
  copyWithout({}, source, ...keys)

export default cloneWithout
