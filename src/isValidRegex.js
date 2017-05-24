/* eslint-disable max-len */
// @flow

/**
 * Returns true if RegExp is valid
 */

const isValidRegex = (v: any): bool =>
  /^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/.test(v)

export default isValidRegex
