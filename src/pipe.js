// @flow

import reduce from './reduce'

// l->r composition
const pipe = (...fns: any) : any =>
  (data: any) =>
    reduce((v: any, fn: any) : any =>
      fn(v), data)(fns)

export default pipe
