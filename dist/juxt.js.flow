// @flow

import curry from './curry'

type F = () => any
type FS = F[]
type A = any

const map = (f: any, a: any[]): any => a.map(f)

/**
 * Like Clojure's `juxt`
 * Takes a list of functions and returns a fn that is the juxtaposition
 * of those fns
 * @example
 * juxt([ id, increment ], [ 1 ]) // => [ 1, 2 ]
 */

const juxt = curry((fns: FS, a: A) =>
  map((f: F) =>
    f(a), fns))

export default juxt
