"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Async `sleep`. Also see `sleep`.
 * You can `await` it, or `.then` it.
 * @example
 * const delay = await sleepAsync(1000)
 */

var sleepAsync = function sleepAsync(ms /*: number*/) /*: Promise<*>*/ {
  return new Promise(function (resolve) /*: any*/ {
    return setTimeout(resolve, ms);
  });
};

exports.default = sleepAsync;