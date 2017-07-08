'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reduce
 * @example
 * reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]) // => 10
 * reduce((a, b) => a + b)(0)([ 1, 2, 3, 4 ]) // => 10
 */

var reduce = (0, _curry2.default)(function (fn, initialValue, data) {
  var reducedValue = initialValue;
  for (var i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i]);
  }
  return reducedValue;
});

exports.default = reduce;