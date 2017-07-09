'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _util = require('util');

var fn = process.argv[2] || process.env.ERR_FILE || 'err.log';
var file = (0, _fs.createWriteStream)(__dirname + '/' + fn, { flags: 'w' });

var writeError = function writeError(data) {
  file.write((0, _util.format)(data) + '\n');
  process.stdout.write((0, _util.format)(data) + '\n');
};

exports.default = writeError;