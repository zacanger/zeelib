'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cdr = require('./cdr');

var _cdr2 = _interopRequireDefault(_cdr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `cddr`
 * @example
 * cddr([ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

var cddr = function cddr(a) {
  return (0, _cdr2.default)((0, _cdr2.default)(a));
};

exports.default = cddr;