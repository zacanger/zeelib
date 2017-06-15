'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

/**
 * Returns the relative path from here to there
 * @example
 * getRelativePath('/home/z/', '/') // '../..'
 */

var getRelativePath = function getRelativePath(here /*: string*/, there /*: string*/) /*: string*/ {
  return (0, _path.relative)(here, there);
}; // @flow

exports.default = getRelativePath;