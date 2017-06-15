'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry2');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function curry3(f) {
  console.error('`curry3` is deprecated. Please use `curry` instead.');
  function curried(a, b, c) {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return (0, _curry2.default)(function (b, c) {
          return f(a, b, c);
        });
      case 2:
        return function (c) {
          return f(a, b, c);
        };
      default:
        return f(a, b, c);
    }
  }
  return curried;
}

exports.default = curry3;