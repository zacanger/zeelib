// @flow
import getIsNode from './get-is-node'

/**
 * `console.dir` with colors by default in Node
 */

const dir = (obj: Object): void =>
  getIsNode() ? console.dir(obj, { colors: true }) : console.log(obj)

export default dir
