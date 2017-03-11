// @flow

const truncate = (str: string, limit: number, tail: string = '…'): string => {
  if (str.length > limit) {
    limit = limit - tail.length
    return `${str.substr(0, limit)}${tail}`
  }
  return str
}

export default truncate
