// @flow

import isError from './is-error'

/**
 * Throw an error, or anything else passed in as an error
 * @example
 * throwError(new Error('Oh noes!'))
 * throwError('Oh noes!')
 * foo().then(something).catch(throwError)
 */

const throwError = (err: any): Error => {
  throw isError(err) ? err : new Error(err)
}

export default throwError
