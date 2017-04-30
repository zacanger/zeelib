// @flow

import getIsNode from './getIsNode'

const exit = (n: number = 0): void => {
  if (getIsNode()) {
    process.exit(0)
  }
}

export default exit
