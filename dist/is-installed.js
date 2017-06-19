"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the passed node_module name is installed
 * @example
 * isInstalled('zeelib') // => true
 */

var isInstalled = function isInstalled(pkgName /*: string*/) /*: bool*/ {
  try {
    require.resolve(pkgName);
    return true;
  } catch (_) {
    return false;
  }
};

exports.default = isInstalled;