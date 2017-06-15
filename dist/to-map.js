'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Make a map-like object from an array
 */

var toMap = function toMap(arr /*: any[]*/) /*: Object*/ {
  console.error('`toMap` is deprecated. Please use native `Map` instead.');
  var m = {};
  arr.forEach(function (e, i) {
    e.index = i;
    m[e.name] = e;
  });
  return m;
};

exports.default = toMap;