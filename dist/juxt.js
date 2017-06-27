'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: type F = () => any*/ // @flow

/*:: type FS = F[]*/
/*:: type A = any*/


var map = function map(f /*: any*/, a /*: any[]*/) /*: any*/ {
  return a.map(f);
};

/**
 * Like Clojure's `juxt`
 * Takes a list of functions and returns a fn that is the juxtaposition
 * of those fns
 * @example
 * juxt([ id, increment ], [ 1 ]) // => [ 1, 2 ]
 */

var juxt = (0, _curry2.default)(function (fns /*: FS*/, a /*: A*/) {
  return map(function (f /*: F*/) {
    return f(a);
  }, fns);
});

exports.default = juxt;