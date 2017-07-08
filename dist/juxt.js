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

/**
 * Like Clojure's `juxt`
 * Takes a list of functions and returns a fn that is the juxtaposition
 * of those fns
 * @example
 * juxt([ id, increment ], [ 1 ]) // => [ 1, 2 ]
 */

var juxt = (0, _curry2.default)(function (fns, a) {
  return map(function (f) {
    return f(a);
  }, fns);
});

exports.default = juxt;