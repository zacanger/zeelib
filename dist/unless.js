"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Call a function if the condition is falsey
 * @example
 * unless(() => true, false) // => true
 */

var unless = function unless(cond, fn) {
  return !cond ? fn() : null;
};

exports.default = unless;