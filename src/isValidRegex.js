/* eslint-disable max-len */
// @flow

/**
 * Returns true if RegExp is valid
 */

const isValidRegex = (a: any): bool =>
  /^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/.test(a)

export default isValidRegex
