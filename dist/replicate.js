"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Make an array that contains e, n times
 */

var replicate = function replicate(num /*: number*/, el /*: any*/) /*: any[]*/ {
  var a = [];
  for (var x = 0; x < num; x++) {
    a.push(el);
  }
  return a;
};

exports.default = replicate;