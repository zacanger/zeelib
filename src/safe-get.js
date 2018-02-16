// @flow

import id from './id'

// credit: gh:uniqname
// this used to be a lot more complex and handle many more edge cases
// but it was unreadable, and this is what i originally _wanted_ anyway

/**
 * Like `_.get`: takes an access string and an optional fallback,
 * then an object
 * @param {string} path
 * @param {A} fallback
 * @param {Object} obj
 * @returns {?A}
 * @example
 * safeGet('a.b.c')({ a: { b: { c: 'd' } } }) // => 'd'
 * safeGet('a.b.e')({ a: { b: { c: 'd' } } }) // => undefined
 * safeGet('a.b.e', 'f')({ a: { b: { c: 'd' } } }) // => 'f'
 */

const safeGet = <A>(path: string, fallback?: A) =>
  (obj: Object): ?A =>
    (path.split(/[.[\]]/)
      .filter(id)
      // eslint-disable-next-line flowtype/no-weak-types
      .reduce((o, prop) => o && o[prop], obj): any) ||
      fallback

export default safeGet
