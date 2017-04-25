// @flow

const getMethodsOf = (o: Object): string[] => {
  const r = []
  for (let m of o) {
    if (typeof o[m] === 'function') {
      r.push(m.name)
    }
  }
  return r
}

export default getMethodsOf
