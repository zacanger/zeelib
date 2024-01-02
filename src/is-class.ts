// eslint-disable-next-line @typescript-eslint/unbound-method
const toString = Function.prototype.toString

const fnBody = (fn: () => any): string =>
  toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '')

/**
 * Returns true if passed fn is an ES2015 class
 * @example
 * isClass(noop) // => false
 */

export const isClass = (fn: () => any): boolean =>
  (typeof fn === 'function' &&
    (/^class\s/.test(toString.call(fn)) ||
      (/^.*classCallCheck\(/.test(fnBody(fn)))))
