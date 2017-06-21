/* eslint-disable max-len */
// @flow

const isValidRegex = (v: any): bool => {
  console.error('`isValidRegex` is deprecated.')
  return /^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/.test(v)
}

export default isValidRegex
