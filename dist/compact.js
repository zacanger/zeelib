"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns an array with all falsey values removed
 * @example
 * compact([ 'a', null, '', 2]) // => [ 'a', 2 ]
 */

var compact = function compact(a /*: any[]*/) /*: any[]*/ {
  return a.filter(function (v) {
    return v;
  });
};

exports.default = compact;