'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

/**
 * Get hostname
 * @example
 * getHostname()
 */

var getHostname = function getHostname() /*: string*/ {
  return (0, _os.hostname)();
}; // @flow

exports.default = getHostname;