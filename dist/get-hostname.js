'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var getHostname = function getHostname() {
  return (0, _os.hostname)();
};

exports.default = getHostname;