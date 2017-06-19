'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

var _path = require('path');

// @flow

var SEPARATOR = process.platform === 'win32' ? ';' : ':';
var env = Object.assign({}, process.env);

env.PATH = (0, _path.resolve)('./node_modules/.bin') + SEPARATOR + env.PATH;

/**
 * Like a standalone `npm run` that obeys `npm bin`
 * @example
 * execute('standard-format -w')
 */

var execute = function execute(cmd /*: string*/) /*: void*/ {
  var output = (0, _child_process.execSync)(cmd, { // eslint-disable-line no-unused-vars
    cwd: process.cwd(), env: env
  });
};

exports.default = execute;