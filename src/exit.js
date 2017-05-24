// @flow

import getIsNode from './getIsNode'

/**
 * `process.exit` that optionally takes an exit code
 */

const exit = (n: number = 0): void => {
  if (getIsNode()) {
    process.exit(n)
  }
}

export default exit