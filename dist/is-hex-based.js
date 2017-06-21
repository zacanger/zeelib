'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getHexRegex = require('./get-hex-regex');

var _getHexRegex2 = _interopRequireDefault(_getHexRegex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the string is hex-based
 * @example
 * isHexBased('fff') // => true
 * isHexBased('whatever') // => false
 */

var isHexBased = function isHexBased(color /*: string*/) /*: bool*/ {
  return (0, _getHexRegex2.default)().test(color);
}; // @flow

exports.default = isHexBased;