// @flow

const typeOf = (a: any) : string => {
  if (typeof a === 'object') {
    if (a === null) return 'null'
    if (a && a.nodeType === 1) return 'dom'
    if (a instanceof Array) return 'array'
    if (a instanceof Date) return 'date'
    return 'object'
  }
  return typeof a
}

export default typeOf
