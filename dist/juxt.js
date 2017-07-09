'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = function map(f, a) {
  return a.map(f);
};

var juxt = (0, _curry2.default)(function (fns, a) {
  return map(function (f) {
    return f(a);
  }, fns);
});

exports.default = juxt;