'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

/**
 * Safe `readFileSync`
 */

// @flow

var readFileS = function readFileS(str /*: string*/) /*: ?string*/ {
  try {
    return (0, _fs.readFileSync)((0, _path.resolve)(str), { encoding: 'utf8' });
  } catch (_) {}
};

exports.default = readFileS;