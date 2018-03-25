// @flow

/**
 * Call a function if the condition is falsey
 * @example
 * unless(() => true, false) // => true
 */

const unless = <A> (
  cond: bool,
  fn: () => A
): ?A => !cond ? fn() : null

export default unless
