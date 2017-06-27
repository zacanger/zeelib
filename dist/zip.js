'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pair = require('./pair');

var _pair2 = _interopRequireDefault(_pair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes a list of tuples
 * Each tuple is the elements of each passed array
 * at the same position
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array}
 * @example
 * zip([ 1, 2 ], [ 3, 4 ]) // => [ [ 1, 3 ], [ 2, 4 ] ]
 */

var zip = function zip(xs, ys) {
  return xs.map(function (x, i) {
    return (0, _pair2.default)(x, ys[i]);
  });
};
exports.default = zip;