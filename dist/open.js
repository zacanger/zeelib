'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

/**
 * Opens things. Works on Linux, Mac, and Windows
 * @example
 * open('http://zacanger.com')
 */

var open = function open(args /*: any*/, opts /*: any*/, cb /*: any*/) /*: any*/ {
  args = [args];
  var cmd = process.platform === 'win32' ? 'cmd' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  return (0, _child_process.execFile)(cmd, args, opts, cb);
}; // @flow

exports.default = open;