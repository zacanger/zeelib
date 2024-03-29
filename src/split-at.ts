import { take } from './take'
import { drop } from './drop'

/**
 * Like Haskell's `splitAt`
 *
 * splitAt n xs returns a tuple xs prefix of length n
 * and second element is remainder of list
 * @example
 * splitAt(1, [ [ 'a', 'b' ], 'c' ]) // => [ [ [ 'a', 'b' ] ], [ 'c' ] ]
 */

export const splitAt = <A>(num: number, arr: A[]): [A[], A[]] =>
  [ take(num, arr), drop(num, arr) ]
