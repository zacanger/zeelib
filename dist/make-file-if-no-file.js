'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

/**
 * Make a file if it doesn't exist already
 */

// @flow

var makeFileIfNoFile = function makeFileIfNoFile(filePath /*: string*/) /*: void*/ {
  var contents /*: string*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var fl = (0, _path.resolve)(filePath);
  try {
    (0, _fs.statSync)(fl);
  } catch (_) {
    (0, _fs.writeFileSync)(fl, contents);
  }
};

exports.default = makeFileIfNoFile;