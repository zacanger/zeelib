'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findWhere = function findWhere(f, arr) {
  return (0, _filter2.default)(f, arr)[0] || null;
};

exports.default = findWhere;