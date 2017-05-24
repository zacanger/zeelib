// @flow

/**
 * Simple merge for objects
 */

function merge (o: Object, n: ?Object): Object {
  if (n === undefined) {
    return (t) => merge(o, (t))
  }

  return Object.assign({}, o, n)
}

export default merge
