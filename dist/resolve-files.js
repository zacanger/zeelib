'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var resolveFiles = function resolveFiles(ls) {
  return ls.map(function (e) {
    return (0, _path.resolve)(e);
  });
};

exports.default = resolveFiles;