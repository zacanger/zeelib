// @flow

import objectAssign from './objectAssign'

// cred : gh:texastoland
// {key, ...copy} = {...target, ...source}
const copyWithout = (target: any, source: any, ...keys: any) : any => {
  const copy = objectAssign(target, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

export default copyWithout
