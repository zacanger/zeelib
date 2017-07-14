// @flow

/**
 * Clones an object, leaving out specified keys
 * @example
 * cloneWithout({ a: 1, b: 2 }, 'a') // => { b: 2 }
 * cloneWithout({ a: 1, b: 2 }, 'a', 'b') // => {}
 */

const cloneWithout = (source: Object, ...keys: string[]): Object => {
  const copy = Object.assign({}, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

export default cloneWithout
