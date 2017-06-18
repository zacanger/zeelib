// @flow
import getIsNode from './get-is-node'

/**
 * `console.dir` with colors by default in Node
 * @example
 * dir({ foo: 'bar' }) // => { foo: 'bar' }
 */

const dir = (obj: Object): void =>
  getIsNode() ? console.dir(obj, { colors: true }) : console.log(obj)

export default dir
