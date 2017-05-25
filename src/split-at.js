// @flow

import take from './take'
import drop from './drop'

/**
 * Like Haskell's `splitAt`
 * splitAt n xs returns a tuple xs prefix of length n
 * and second element is remainder of list
 */

const splitAt = (num: number, arr: any[]): any[] =>
  [ take(num, arr), drop(num, arr) ]

export default splitAt
