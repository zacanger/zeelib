'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

/**
 * Get free disk space
 * @example
 * getFreeDisk()
 */

var getFreeDisk = function getFreeDisk() /*: number*/ {
  var lines = (0, _child_process.execSync)('df -k /').toString().trim().split('\n');
  var strDiskInfo = lines[lines.length - 1].replace(/[\s\n\r]+/g, ' ');
  var diskInfo = strDiskInfo.split(' ');
  var total = +diskInfo[1] * 1024;
  var free = +diskInfo[3] * 1024;
  var freeDisk = free / total / Math.pow(10, -2);
  return freeDisk;
}; // @flow

exports.default = getFreeDisk;