// @flow

import copyWithout from './copy-without'

/**
 * Clones an object, leaving out specified keys
 * cred : gh:texastoland
 * @example
 * cloneWithout({ a: 1, b: 2 }, 'a') // => { b: 2 }
 * cloneWithout({ a: 1, b: 2 }, 'a', 'b') // => {}
 */

const cloneWithout = (source: Object, ...keys: string[]): Object =>
  copyWithout({}, source, ...keys)

export default cloneWithout
