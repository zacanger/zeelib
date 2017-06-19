"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Simple `pluck`
 * @example
 * pluck('a', [ { a: 'a' }, { a: 'b' } ]) // => [ 'a', 'b' ]
 */

var pluck = function pluck(key /*: string*/, arr /*: any[]*/) /*: any[]*/ {
  return arr.map(function (obj) {
    return obj[key];
  });
};

exports.default = pluck;