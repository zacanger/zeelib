'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isDate = require('./is-date');

var _isDate2 = _interopRequireDefault(_isDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValidDate = function isValidDate(d) {
  return (0, _isDate2.default)(d) && d.toString() !== 'Invalid Date';
};

exports.default = isValidDate;