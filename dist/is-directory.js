'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Returns true if the path is a directory
 */

var isDirectory = function isDirectory(filePath /*: string*/) /*: bool*/ {
  try {
    return (0, _fs.statSync)(filePath).isDirectory();
  } catch (_) {
    return false;
  }
}; // @flow

exports.default = isDirectory;