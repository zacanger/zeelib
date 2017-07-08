'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Read and parse JSON
 * @example
 * const stuff = readJsonSync('./foo.json')
 */

var readJsonSync = function readJsonSync(file) {
  return JSON.parse((0, _fs.readFileSync)(file, 'utf8'));
};

exports.default = readJsonSync;