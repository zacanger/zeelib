"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Call a function if the condition is falsey
 */

var unless = function unless(cond /*: any*/, fn /*: () => any*/) /*: ?any*/ {
  return !cond ? fn() : null;
};

exports.default = unless;