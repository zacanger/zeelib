// @flow

/**
 * Call a function if the condition is falsey
 * @example
 * unless(() => true, false) // => true
 */

const unless = (
  cond: any,
  fn: () => any
): ?any =>
  !cond ? fn() : null

export default unless
