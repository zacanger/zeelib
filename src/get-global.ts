/**
 * Gets the global for your current context.
 * @example
 * getGlobal() // => window, global, whatever
 */

/* eslint-disable no-undef */

const getGlobal = (): {} => {
  // @ts-ignore
  if (typeof self !== 'undefined') {
    // @ts-ignore
    return self
  }
  // @ts-ignore
  if (typeof window !== 'undefined') {
    // @ts-ignore
    return window
  }
  // @ts-ignore
  if (typeof global !== 'undefined') {
    return global
  }
}

export default getGlobal
