'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var withInfo = function withInfo() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str + ':' + (0, _os.hostname)() + ':' + process.pid;
};

var logWithInfo = function logWithInfo() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return console.log(withInfo(str));
};

exports.default = logWithInfo;