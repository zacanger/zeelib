// @flow

import cdr from './cdr'

const cddr = (a: any[]): any =>
  cdr(cdr(a))

export default cddr
