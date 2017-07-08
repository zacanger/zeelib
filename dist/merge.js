"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Simple merge for objects
 * @example
 * merge({ a: 'a' }, { b: 'b' }) // => { a: 'a', b: 'b' }
 */

function merge(o, n) {
  if (n === undefined) {
    return function (t) {
      return merge(o, t);
    };
  }

  return Object.assign({}, o, n);
}

exports.default = merge;