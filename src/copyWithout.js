import objectAssign from './objectAssign'

// cred : gh:texastoland
// {key, ...copy} = {...target, ...source}
const copyWithout = (target, source, ...keys) => {
  const copy = objectAssign(target, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

export default copyWithout
