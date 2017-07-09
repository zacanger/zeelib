'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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