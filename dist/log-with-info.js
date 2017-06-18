'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var withInfo = function withInfo() /*: string*/ {
  var str /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str + ':' + (0, _os.hostname)() + ':' + process.pid;
};

/**
 * `console.log` with hostname and PID info
 * @example
 * logWithInfo('foo') // => `foo:angr:1234`
 */

// @flow

var logWithInfo = function logWithInfo() /*: void*/ {
  var str /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return console.log(withInfo(str));
};

exports.default = logWithInfo;