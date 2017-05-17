// @flow

/**
 * Clones a stringifiable object
 */

const clone = (a: Object): Object =>
  JSON.parse(JSON.stringify(a))

export default clone
