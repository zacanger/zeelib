'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Run a function on n (any), and time it
 * @example
 * timeTest(1, () => true) // time: 0.166ms ; true
 */

var timeTest = function timeTest(n, cb) {
  console.time('time');
  var r = cb(n);
  console.timeEnd('time');
  return r;
};

exports.default = timeTest;