'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getUserShell = function getUserShell() {
  return process.env.SHELL || '';
};

exports.default = getUserShell;