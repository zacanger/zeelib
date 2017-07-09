'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var getFreeMemory = function getFreeMemory() {
  return parseFloat(((0, _os.freemem)() / 1024 / 1024).toFixed(2));
};

exports.default = getFreeMemory;