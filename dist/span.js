'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _takeWhile = require('./take-while');

var _takeWhile2 = _interopRequireDefault(_takeWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Similar to `takeWhile`: returns a tuple
 * of all elements that pass predicate
 * and all elements that did not
 * @example
 * span(lessThanThree, [ 1, 2, 3, 4 ]) // => [ [ 1, 2 ], [ 3, 4 ] ]
 */

var span = function span(pred, arr) {
  var sat = (0, _takeWhile2.default)(pred, arr);
  return [sat, arr.slice(sat.length)];
};

exports.default = span;