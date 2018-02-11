// @flow

/**
 * Simple merge for objects
 * @example
 * merge({ a: 'a' }, { b: 'b' }) // => { a: 'a', b: 'b' }
 */

// eslint-disable-next-line flowtype/no-weak-types
const merge = (o: Object, n: ?Object): Object => {
  if (n === undefined) {
    return (t) => merge(o, (t))
  }

  return Object.assign({}, o, n)
}

export default merge
