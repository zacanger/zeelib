'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var isSymLink = function isSymLink(filePath) {
  try {
    return (0, _fs.lstatSync)(filePath).isSymbolicLink();
  } catch (_) {
    return false;
  }
};

exports.default = isSymLink;