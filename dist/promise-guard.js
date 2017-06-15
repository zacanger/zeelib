'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Will reject if condition is false
 * @param {any} cond
 * @param {Error} err
 * @returns {Promise}
 */

var promiseGuard = function promiseGuard(cond) {
  var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Error(cond + ' was false');
  return Promise[cond() ? 'resolve' : 'reject'](err);
};

exports.default = promiseGuard;