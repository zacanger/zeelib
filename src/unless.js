// @flow

/**
 * Call a function if the condition is falsey
 * @example
 * unless(false, () => true) // => true
 */

const unless = (
  fn: () => any,
  cond: any
): ?any =>
  !cond ? fn() : null

export default unless
