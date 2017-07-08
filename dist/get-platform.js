"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns platform (e.g. 'linux')
 * @example
 * getPlatform()
 */

var getPlatform = function getPlatform() {
  return process.platform;
};

exports.default = getPlatform;