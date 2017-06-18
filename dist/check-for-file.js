'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

// @flow

/**
 * Returns bool based on if passed path exists
 * @example
 * checkForFile('./foo') // => bool
 */

var checkForFile = function checkForFile(filePath /*: string*/) /*: bool*/ {
  try {
    (0, _fs.statSync)((0, _path.resolve)(filePath));
    return true;
  } catch (_) {
    return false;
  }
};

exports.default = checkForFile;