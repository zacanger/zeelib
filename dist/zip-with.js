'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pair = require('./pair');

var _pair2 = _interopRequireDefault(_pair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes a function and two lists
 * Returns a list made by calling the function
 * on the elements of each list in the same position
 * @example
 * zipWith(increment, [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2 ]
 */

var zipWith = function zipWith(fn /*: (any) => any*/, xs /*: any[]*/, ys /*: any[]*/) /*: any[]*/ {
  return xs.map(function (x, i) {
    return fn.apply(fn, (0, _pair2.default)(x, ys[i]));
  });
}; // @flow

exports.default = zipWith;