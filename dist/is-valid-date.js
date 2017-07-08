'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isDate = require('./is-date');

var _isDate2 = _interopRequireDefault(_isDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the passed object is a valid Date
 * @example
 * isValidDate('1234') // => false
 */

var isValidDate = function isValidDate(d) {
  return (0, _isDate2.default)(d) && d.toString() !== 'Invalid Date';
};

exports.default = isValidDate;