"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Call a function if the condition is falsey
 * @example
 * unless(false, () => true) // => true
 */

var unless = function unless(fn /*: () => any*/, cond /*: any*/) /*: ?any*/ {
  return !cond ? fn() : null;
};

exports.default = unless;