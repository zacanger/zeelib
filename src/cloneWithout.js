import copyWithout from './copyWithout'

// cred : gh:texastoland
// { key, ...clone } = source
const cloneWithout = (source, ...keys) => copyWithout({}, source, ...keys)
export default cloneWithout
