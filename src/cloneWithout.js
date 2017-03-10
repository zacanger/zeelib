// @flow

import copyWithout from './copyWithout'

// cred : gh:texastoland
// { key, ...clone } = source
const cloneWithout = (source: Object, ...keys: any): any =>
  copyWithout({}, source, ...keys)

export default cloneWithout
