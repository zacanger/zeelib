// @flow

import isNode from './is-node'

/**
 * `console.dir` with colors by default in Node
 * @example
 * dir({ foo: 'bar' }) // => { foo: 'bar' }
 */

const dir = (obj: {[string]: *}): void =>
  isNode()
    ? console.dir(obj, { colors: true })
    : typeof console.dir === 'function'
      ? console.dir(obj)
      : console.log(obj)

export default dir
