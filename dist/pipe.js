'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Left to right composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * pipe(addOne, timesTwo)(2) // => 6
 */

var pipe = function pipe() /*: any*/ {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (data /*: any*/) {
    return (0, _reduce2.default)(function (v /*: any*/, fn /*: any*/) /*: any*/ {
      return fn(v);
    }, data)(fns);
  };
}; // @flow

exports.default = pipe;