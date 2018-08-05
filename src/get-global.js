// @flow

/**
 * Gets the global for your current context.
 * @example
 * getGlobal() // => window, global, whatever
 */

const getGlobal = (): Object => {
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  // $FlowFixMe
  return Function('return this')() // eslint-disable-line
}

export default getGlobal
