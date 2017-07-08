'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

/**
 * Resolve a list of paths
 * @example
 * resolveFiles([ 'foo', 'bar' ])
 */

var resolveFiles = function resolveFiles(ls) {
  return ls.map(function (e) {
    return (0, _path.resolve)(e);
  });
};

exports.default = resolveFiles;