// @flow

const unless = (cond: any, fn: any) : ?any =>
  !cond ? fn() : null

export default unless
