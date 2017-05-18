// @flow

import pipe from './pipe'
import reverse from './reverse'

/**
 * Right to left composition
 */

const compose = (...fns: any): any =>
  pipe(...reverse(fns))

export default compose
