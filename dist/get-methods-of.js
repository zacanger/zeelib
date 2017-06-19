'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get list of methods in an object
 * @example
 * const o = { foo: () => true, bar () { return false }, a: 'b' }
 * getMethodsOf(o) // => [ 'foo', 'bar' ]
 */

var getMethodsOf = function getMethodsOf(o /*: Object*/) /*: string[]*/ {
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