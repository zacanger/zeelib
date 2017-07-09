'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

var _path = require('path');

var SEPARATOR = process.platform === 'win32' ? ';' : ':';
var env = Object.assign({}, process.env);

env.PATH = (0, _path.resolve)('./node_modules/.bin') + SEPARATOR + env.PATH;

var execute = function execute(cmd) {
  var output = (0, _child_process.execSync)(cmd, {
    cwd: process.cwd(), env: env
  });
};

exports.default = execute;