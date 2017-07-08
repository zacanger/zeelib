'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Returns true if the path is a directory
 * @example
 * isDirectory('.') // => true
 * isDirectory('./fake-path') // => false
 */

var isDirectory = function isDirectory(filePath) {
  try {
    return (0, _fs.statSync)(filePath).isDirectory();
  } catch (_) {
    return false;
  }
};

exports.default = isDirectory;