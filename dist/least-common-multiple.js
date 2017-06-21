'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _greatestCommonDivisor = require('./greatest-common-divisor');

var _greatestCommonDivisor2 = _interopRequireDefault(_greatestCommonDivisor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leastCommonMultiple() /*: number*/ {
  console.error('`leastCommonMultiple` is deprecated.');
  var i = arguments.length;
  var a = arguments[--i];
  while (a && i) {
    var b = arguments[--i];
    a = a * b / (0, _greatestCommonDivisor2.default)(a, b);
  }
  return a;
} // @flow

exports.default = leastCommonMultiple;