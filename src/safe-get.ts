import id from './id'

/**
 * Like `_.get`: takes an access string and an optional fallback,
 * then an object
 * @example
 * safeGet('a.b.c')({ a: { b: { c: 'd' } } }) // => 'd'
 * safeGet('a.b.e')({ a: { b: { c: 'd' } } }) // => undefined
 * safeGet('a.b.e', 'f')({ a: { b: { c: 'd' } } }) // => 'f'
 */

const safeGet = <A>(path: string, fallback?: A) => (
  obj: Record<string, any>,
): A | null | undefined =>
  (path
    .split(/[.[\]]/)
    .filter(id)
    .reduce((o, prop) => o?.[prop], obj) as any) || fallback

export default safeGet
