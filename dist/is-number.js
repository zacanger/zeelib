'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = require('./is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the value is a number and is not NaN
 */

var isNumber = function isNumber(v /*: any*/) /*: bool*/ {
  return typeof v === 'number' && !(0, _isNan2.default)(v);
}; // @flow

exports.default = isNumber;