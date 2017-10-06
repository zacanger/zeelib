// @flow

import isDefined from './is-defined'

/**
 * Gets the global for your current context.
 * @example
 * getGlobal() // => window, global, whatever
 */

const getGlobal = (): any =>
  isDefined(self)
    ? self
    : isDefined(window)
      ? window
      : isDefined(global)
        ? global
        // $FlowFixMe
        : Function('return this')() // eslint-disable-line

export default getGlobal
