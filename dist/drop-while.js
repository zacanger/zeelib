'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _span = require('./span');

var _span2 = _interopRequireDefault(_span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropWhile = function dropWhile(pred, arr) {
  return (0, _span2.default)(pred, arr)[1] || [];
};

exports.default = dropWhile;