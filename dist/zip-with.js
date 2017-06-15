'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _pair = require('./pair');

var _pair2 = _interopRequireDefault(_pair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes a function and two lists
 * Returns a list made by calling the function
 * on the elements of each list in the same position
 * @param {function} fn
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array}
 */

var zipWith = function zipWith(fn, xs, ys) {
  return (0, _map2.default)(function (x, i) {
    return fn.apply(fn, (0, _pair2.default)(x, ys[i]));
  }, xs);
};

exports.default = zipWith;