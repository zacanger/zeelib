'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get the current user's shell, or
 * an empty string on shell-less platforms
 * @example
 * getUserShell()
 */

var getUserShell = function getUserShell() {
  return process.env.SHELL || '';
};

exports.default = getUserShell;