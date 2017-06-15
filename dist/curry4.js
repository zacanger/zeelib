'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry2');

var _curry2 = _interopRequireDefault(_curry);

var _curry3 = require('./curry3');

var _curry4 = _interopRequireDefault(_curry3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function curry4(f) {
  console.error('`curry4` is deprecated. Please use `curry` instead.');
  function curried(a, b, c, d) {
    // eslint-disable-line complexity
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return (0, _curry4.default)(function (b, c, d) {
          return f(a, b, c, d);
        });
      case 2:
        return (0, _curry2.default)(function (c, d) {
          return f(a, b, c, d);
        });
      case 3:
        return function (d) {
          return f(a, b, c, d);
        };
      default:
        return f(a, b, c, d);
    }
  }
  return curried;
}

exports.default = curry4;