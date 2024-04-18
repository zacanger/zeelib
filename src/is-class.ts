const fnBody = (fn: () => any): string =>
  Function.prototype.toString.call(fn)
    .replace(/^[^{]*{\s*/, '')
    .replace(/\s*}[^}]*$/, '')

/**
 * Returns true if passed fn is an ES2015 class
 * @example
 * isClass(noop) // => false
 */

export const isClass = (fn: () => any): boolean =>
  (typeof fn === 'function' &&
    (/^class\s/.test(
      Function.prototype.toString.call(fn)) ||
      (/^.*classCallCheck\(/.test(fnBody(fn)))))
