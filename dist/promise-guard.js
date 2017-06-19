'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var promiseGuard = function promiseGuard(cond) {
  var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Error(cond + ' was false');

  console.error('`promiseGuard` is deprecated.');
  return Promise[cond() ? 'resolve' : 'reject'](err);
};

exports.default = promiseGuard;