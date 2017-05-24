// @flow

import isError from './isError'

/**
 * Throw an error
 */

const throwError = (err: any): Error => {
  if (isError(err)) throw err
  throw new Error(err)
}

export default throwError
