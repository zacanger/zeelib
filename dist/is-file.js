'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Returns true if the path is a file
 * @example
 * isFile('./README.md') // => true
 * isFile('.') // => false
 */

var isFile = function isFile(filePath /*: string*/) /*: bool*/ {
  try {
    return (0, _fs.statSync)(filePath).isFile();
  } catch (_) {
    return false;
  }
}; // @flow

exports.default = isFile;