/**
 * Like `_.get`: takes an access string and an optional fallback,
 * then an object.
 * @param {string} path
 * @param {any} fallback
 * @param {Object} obj
 * @returns {any}
 * @example
 * safeGet('a.b.c')({ a: { b: { c: 'd' } } }) // => 'd'
 * safeGet('a.b.e')({ a: { b: { c: 'd' } } }) // => undefined
 * safeGet('a.b.e', 'f')({ a: { b: { c: 'd' } } }) // => 'f'
 */

const safeGet = (path = '', fallback) =>
  (obj) =>
    path.split(/[.[\]]/)
      .filter((_) => _)
      .reduce((o, prop) => o[prop] || '', obj) ||
      fallback

export default safeGet
