'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var getNodeModules = function getNodeModules() {
  return (0, _fs.readdirSync)('node_modules').filter(function (n) {
    return n !== '.bin';
  });
};

exports.default = getNodeModules;