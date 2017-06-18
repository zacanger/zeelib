"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns platform (e.g. 'linux')
 * @example
 * getPlatform()
 */

var getPlatform = function getPlatform() /*: string*/ {
  return process.platform;
};

exports.default = getPlatform;