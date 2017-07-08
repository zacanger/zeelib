'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Invokes until function returns truthily
 * @example
 * // Succeeds after 15 calls
 * let i = 0
 * invoker(20, 100)(() => {
 *   console.log(i)
 *   return ++i > 15
 * }, console.log)
 * // Fails after 20 calls
 * let ii = 0
 * invoker(20, 100)(() => {
 *   console.log(ii)
 *   return ++ii > 22
 * }, console.log)
 */

var invoker = function invoker(limit, interval) {
  return function (fn, cb) {
    var current = 0;
    var _fn = function _fn() {
      current++;
      var result = fn();
      if (result) {
        cb(null, result);
      } else if (current < limit) {
        setTimeout(_fn, interval);
      } else {
        cb(new Error('Limit exceeded!'), null);
        cb = function cb() {};
      }
    };
    _fn();
  };
};

exports.default = invoker;