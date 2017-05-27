// @flow

import isError from './is-error'

/**
 * Throw an error, or anything else passed in as an error
 */

const throwError = (err: any): Error => {
  throw isError(err) ? err : new Error(err)
}

export default throwError
