/**
 * Gets the global for your current context.
 * @example
 * getGlobal() // => window, global, whatever
 */

export const getGlobal = (): typeof global | undefined => {
  // @ts-expect-error expected
  if (typeof window !== 'undefined') {
    // @ts-expect-error expected
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  // @ts-expect-error expected
  if (typeof self !== 'undefined') {
    // @ts-expect-error expected
    return self
  }
}
