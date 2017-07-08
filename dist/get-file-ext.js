'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

/**
 * Get the file extension for a given file
 * @example
 * getFileExt('foo.bar') // => '.bar'
 */

var getFileExt = function getFileExt(str) {
  return (0, _path.parse)(str).ext.replace(/./, '') || '';
};

exports.default = getFileExt;