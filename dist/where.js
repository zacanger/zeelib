'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var where = function where(arr, f) {
  console.error('`where` is deprecated. Please use `findWhere instead.`');
  return (0, _filter2.default)(arr, f)[0] || null;
};

exports.default = where;