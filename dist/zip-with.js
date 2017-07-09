'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pair = require('./pair');

var _pair2 = _interopRequireDefault(_pair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zipWith = function zipWith(fn, xs, ys) {
  return xs.map(function (x, i) {
    return fn.apply(fn, (0, _pair2.default)(x, ys[i]));
  });
};

exports.default = zipWith;