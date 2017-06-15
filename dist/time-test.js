'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Run a function on n (any), and time it
 */

var timeTest = function timeTest(n /*: any*/, cb /*: any*/) /*: any*/ {
  console.time('time');
  var r = cb(n);
  console.timeEnd('time');
  return r;
};

exports.default = timeTest;