'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get list of methods in an object
 * @example
 * const o = { foo: () => true, bar () { return false }, a: 'b' }
 * getMethodsOf(o) // => [ 'foo', 'bar' ]
 */

var getMethodsOf = function getMethodsOf(o) {
  var r = [];
  for (var m in o) {
    if (o.hasOwnProperty(m)) {
      if (typeof o[m] === 'function') {
        r.push(o[m].name);
      }
    }
  }
  return r;
};

exports.default = getMethodsOf;