// @flow

const memoize = (fn: any): any => {
  const results = new Map()
  return (...args: any): any => {
    const key = args.toString()
    if (!results.get(key)) {
      results.set(key, fn(...args))
    }
    return results.get(key)
  }
}

export default memoize
