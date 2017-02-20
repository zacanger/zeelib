// @flow

import take from './take'
import drop from './drop'

const splitAt = (n: number, a: any[]) : any[] =>
  [ take(n, a), drop(n, a) ]

export default splitAt
