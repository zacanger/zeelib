const toString = Function.prototype.toString

const fnBody = (fn) =>
  toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '')

/**
 * Returns true if passed fn is an ES2015 class
 * @example
 * isClass(noop) // => false
 */

const isClass = (fn) =>
  (typeof fn === 'function' &&
    (/^class\s/.test(toString.call(fn)) ||
      (/^.*classCallCheck\(/.test(fnBody(fn)))))

export default isClass
