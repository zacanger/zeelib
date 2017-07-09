'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var getBasename = function getBasename(str) {
  return (0, _path.parse)(str).base;
};

exports.default = getBasename;