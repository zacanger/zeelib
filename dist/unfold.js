'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a list from a seed
 * Takes an iterating fn and an array seed
 */

var unfold = function unfold(fn /*: () => any*/, seed /*: any*/) /*: any[]*/ {
  var r = fn(seed);
  if (!(0, _isArray2.default)(r)) {
    return [];
  }
  return [r[0]].concat(unfold(fn, r[1]));
}; // @flow

exports.default = unfold;