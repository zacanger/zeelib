'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLike = require('./is-array-like');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNodeList = function isNodeList(v) {
  return (0, _isArrayLike2.default)(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '');
};

exports.default = isNodeList;