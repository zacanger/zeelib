// @flow

/**
 * Simple merge for objects
 * @example
 * merge({ a: 'a' }, { b: 'b' }) // => { a: 'a', b: 'b' }
 */

function merge (o: Object, n: ?Object): Object {
  if (n === undefined) {
    return (t) => merge(o, (t))
  }

  return Object.assign({}, o, n)
}

export default merge
