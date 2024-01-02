/**
 * Call a function if the condition is falsey
 * @example
 * unless(() => true, false) // => true
 */

export const unless = <A>(
  cond: boolean,
  fn: () => A,
): A | null => !cond ? fn() : null
