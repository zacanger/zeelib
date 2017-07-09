'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isHexBased = require('./is-hex-based');

var _isHexBased2 = _interopRequireDefault(_isHexBased);

var _trimSpaces = require('./trim-spaces');

var _trimSpaces2 = _interopRequireDefault(_trimSpaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValidHex = function isValidHex(color) {
  return (0, _isHexBased2.default)((0, _trimSpaces2.default)(color));
};

exports.default = isValidHex;