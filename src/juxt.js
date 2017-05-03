// @flow

import curry from './curry'
import map from './map'

type F = () => any
type FS = F[]
type A = any

const juxt = curry((fns: FS, a: A) =>
  map((f: F) =>
    f(a), fns))

export default juxt
