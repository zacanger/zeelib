'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var getMemoryUsage = function getMemoryUsage() {
  return parseFloat(((0, _os.freemem)() / (0, _os.totalmem)() / Math.pow(10, -2)).toFixed(2));
};

exports.default = getMemoryUsage;