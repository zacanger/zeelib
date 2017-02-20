// @flow

import pipe from './pipe'
import reverse from './reverse'

// r->l composition
const compose = (...fns: any) : any =>
  pipe(...reverse(fns))

export default compose
