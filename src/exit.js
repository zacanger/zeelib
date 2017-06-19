// @flow

import getIsNode from './get-is-node'

/**
 * `process.exit` that optionally takes an exit code
 * @example
 * exit(1)
 */

const exit = (n: number = 0): void => {
  if (getIsNode()) {
    process.exit(n)
  }
}

export default exit
