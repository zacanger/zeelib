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

var getHostname = function getHostname() {
  return (0, _os.hostname)();
};

exports.default = getHostname;