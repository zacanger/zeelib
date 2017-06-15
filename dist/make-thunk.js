'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable standard/no-callback-literal */

/**
 * General-ish utility for async, eager thunks
 * Adapted from kyle simpson's blog
 * @param {function} fn
 * @param {any} args
 * @returns {function} thunk
 * @example
 * const something = makeThunk(fn, param1, param2)
 */

var makeThunk = function makeThunk(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var v = {};
  var fns = [];

  fn.apply(undefined, args.concat([function wait() {
    if (!('args' in v)) {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      v.args = args;
    }
    if (fns.length > 0) {
      while (fns.length > 0) {
        fns.shift().apply(undefined, _toConsumableArray(v.args));
      }
    }
  }]));
  return function thunk(cb) {
    if ('args' in v) {
      cb.apply(undefined, _toConsumableArray(v.args));
    } else {
      fns.push(cb);
    }
  };
};

exports.default = makeThunk;