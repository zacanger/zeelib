'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectToString = require('./object-to-string');

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isError = function isError(a) {
  return a instanceof Error || (0, _objectToString2.default)(a) === '[object Error]';
};

exports.default = isError;