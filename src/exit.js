// @flow

import isNode from './is-node'

/**
 * `process.exit` that optionally takes an exit code
 * @example
 * exit(1)
 */

const exit = (n: number = 0): void => {
  if (isNode()) {
    process.exit(n)
  }
}

export default exit
