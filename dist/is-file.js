'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var isFile = function isFile(filePath) {
  try {
    return (0, _fs.statSync)(filePath).isFile();
  } catch (_) {
    return false;
  }
};

exports.default = isFile;