// @flow

import copyWithout from './copyWithout'

// cred : gh:texastoland
// { key, ...clone } = source
const cloneWithout = (source: any, ...keys: any) : any =>
  copyWithout({}, source, ...keys)

export default cloneWithout
