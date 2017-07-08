'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _car = require('./car');

var _car2 = _interopRequireDefault(_car);

var _cdr = require('./cdr');

var _cdr2 = _interopRequireDefault(_cdr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `cadr`
 * @example
 * cadr([ 1, 2, 3 ]) // => 2
 */

var cadr = function cadr(a) {
  return (0, _car2.default)((0, _cdr2.default)(a));
};

exports.default = cadr;