'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNull = require('./is-null');

var _isNull2 = _interopRequireDefault(_isNull);

var _isUndefined = require('./is-undefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNullOrUndefined = function isNullOrUndefined(v) {
  return (0, _isNull2.default)(v) || (0, _isUndefined2.default)(v);
};

exports.default = isNullOrUndefined;