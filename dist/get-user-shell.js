'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the current user's shell, or
 * an empty string on shell-less platforms
 * @example
 * getUserShell()
 */

var getUserShell = function getUserShell() /*: string*/ {
  return process.env.SHELL || '';
};

exports.default = getUserShell;