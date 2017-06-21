'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectToString = require('./object-to-string');

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the value is a date
 * @example
 * isDate(new Date()) // => true
 */

var isDate = function isDate(v /*: any*/) /*: bool*/ {
  return (0, _objectToString2.default)(v) === '[object Date]';
}; // @flow

exports.default = isDate;