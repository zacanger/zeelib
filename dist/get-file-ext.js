'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

/**
 * Get the file extension for a given file
 */

var getFileExt = function getFileExt(str /*: string*/) /*: string*/ {
  return (0, _path.parse)(str).ext || '';
}; // @flow

exports.default = getFileExt;