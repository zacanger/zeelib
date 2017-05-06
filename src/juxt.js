// @flow

import curry from './curry'

type F = () => any
type FS = F[]
type A = any

const map = (f: any, a: any[]): any => a.map(f)

const juxt = curry((fns: FS, a: A) =>
  map((f: F) =>
    f(a), fns))

export default juxt
