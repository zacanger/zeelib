'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isError = require('./is-error');

var _isError2 = _interopRequireDefault(_isError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var throwError = function throwError(err) {
  throw (0, _isError2.default)(err) ? err : new Error(err);
};

exports.default = throwError;