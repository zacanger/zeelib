'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var getRelativePath = function getRelativePath(here, there) {
  return (0, _path.relative)(here, there);
};

exports.default = getRelativePath;