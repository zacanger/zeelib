'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = require('./is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNumber = function isNumber(v) {
  return typeof v === 'number' && !(0, _isNan2.default)(v);
};

exports.default = isNumber;