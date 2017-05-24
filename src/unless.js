// @flow

/**
 * Call a function if the condition is falsey
 */

const unless = (
  cond: any,
  fn: () => any
): ?any =>
  !cond ? fn() : null

export default unless
