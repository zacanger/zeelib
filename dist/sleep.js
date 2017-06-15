"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Sync sleep. Also see `sleepAsync`.
 * @example
 * sleep(1000)
 */

var sleep = function sleep(ms /*: number*/) /*: void*/ {
  var start = new Date().getTime();
  while (new Date().getTime() - start < ms) {}
};

exports.default = sleep;