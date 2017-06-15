'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lesser = require('./lesser');

var _lesser2 = _interopRequireDefault(_lesser);

var _greater = require('./greater');

var _greater2 = _interopRequireDefault(_greater);

var _gt = require('./gt');

var _gt2 = _interopRequireDefault(_gt);

var _lt = require('./lt');

var _lt2 = _interopRequireDefault(_lt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the last parameter is before the first and second parameters
 */

// @flow

var isBetween = function isBetween(a /*: number*/, b /*: number*/, mid /*: number*/) /*: bool*/ {
  var first = (0, _lesser2.default)(a, b);
  var last = (0, _greater2.default)(a, b);
  return (0, _lt2.default)(first, mid) && (0, _gt2.default)(last, mid);
};

exports.default = isBetween;