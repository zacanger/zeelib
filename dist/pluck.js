"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Simple `pluck`
 * @example
 * pluck('a', [ { a: 'a' }, { a: 'b' } ]) // => [ 'a', 'b' ]
 */

var pluck = function pluck(key, arr) {
  return arr.map(function (obj) {
    return obj[key];
  });
};

exports.default = pluck;