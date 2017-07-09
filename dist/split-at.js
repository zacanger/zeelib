'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _take = require('./take');

var _take2 = _interopRequireDefault(_take);

var _drop = require('./drop');

var _drop2 = _interopRequireDefault(_drop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var splitAt = function splitAt(num, arr) {
  return [(0, _take2.default)(num, arr), (0, _drop2.default)(num, arr)];
};

exports.default = splitAt;