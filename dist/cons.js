"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `cons`
 * @example
 * cons(1, [ 2, 3, 4 ]) // => [ 1, 2, 3, 4 ]
 */

var cons = function cons(el /*: any*/, arr /*: any[]*/) /*: any[]*/ {
  var l = arr.length;
  var b = Array(l + 1);
  b[0] = el;
  for (var i = 0; i < l; ++i) {
    b[i + 1] = arr[i];
  }
  return b;
};

exports.default = cons;