'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a function
 * Can be called with any number of arguments
 * If no arguments, or if any arguments are null,
 * well return undefined
 * Otherwise, will call the function with whatever arguments passed
 * @example
 * maybeArgs(() => {})(1) // => undefined
 * maybeArgs((a) => a)(1) // => 1
 */

function maybeArgs(fn /*: () => any*/) /*: any*/ {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var invalid = args.some(function (arg) {
      return arg === null;
    });
    if (invalid) return;
    var result = fn.apply(this, args);
    return typeof result === 'function' ? maybeArgs(result) : result;
  };
}

exports.default = maybeArgs;