"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `pick`
 * as it is in rambda (not ramda), MIT gh:selfrefactor
 * @example
 * pick('a', { a: 'a', b: 'b' }) // => { a: 'a' }
 * pick([ 'a', 'b' ], { a: 'a', b: 'b', c: 'c' }) // => { a: 'a', b: 'b' }
 */

function pick(ks /*: any*/, o /*: Object*/) /*: Object*/ {
  if (o === undefined) {
    return function (t) {
      return pick(ks, t);
    };
  }

  var r = {};
  var c = 0;
  while (c < ks.length) {
    if (ks[c] in o) {
      r[ks[c]] = o[ks[c]];
    }
    c++;
  }

  return r;
}

exports.default = pick;