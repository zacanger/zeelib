'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var imul = Math.imul || function (a /*: number*/, b /*: number*/) /*: number*/ {
  console.error('`imul` is deprecated, use `Math.imul` instead.');
  var ah = a >>> 16 & 0xffff;
  var al = a & 0xffff;
  var bh = b >>> 16 & 0xffff;
  var bl = b & 0xffff;
  return al * bl + (ah * bh + al * bh << 16 >>> 0) | 0;
};

exports.default = imul;