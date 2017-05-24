// @flow

import take from './take'
import drop from './drop'

/**
 * Like Haskell's `splitAt`
 * splitAt n xs returns a tuple xs prefix of length n
 * and second element is remainder of list
 */

const splitAt = (n: number, a: any[]): any[] =>
  [ take(n, a), drop(n, a) ]

export default splitAt
