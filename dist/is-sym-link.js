'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Returns true if path is a symlink
 */

var isSymLink = function isSymLink(filePath /*: string*/) /*: bool*/ {
  try {
    return (0, _fs.lstatSync)(filePath).isSymbolicLink();
  } catch (_) {
    return false;
  }
}; // @flow

exports.default = isSymLink;