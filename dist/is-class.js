'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var toString = Function.prototype.toString;

var fnBody = function fnBody(fn) {
  return toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
};

var isClass = function isClass(fn) {
  return typeof fn === 'function' && (/^class\s/.test(toString.call(fn)) || /^.*classCallCheck\(/.test(fnBody(fn)));
};

exports.default = isClass;