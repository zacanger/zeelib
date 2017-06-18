'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var invoke = function invoke(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  console.error('`invoke` is deprecated. Please use `apply`.');
  return fn.apply(undefined, args);
};

exports.default = invoke;