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
 * Makes a list of tuples
 * Each tuple is the elements of each passed array
 * at the same position
 * @param {Array} xs
 * @param {Array} ys
 * @returns {Array}
 */

var zip = function zip(xs, ys) {
  return (0, _map2.default)(function (x, i) {
    return (0, _pair2.default)(x, ys[i]);
  }, xs);
};
exports.default = zip;