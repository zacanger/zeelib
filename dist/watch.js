'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

var watchFile = function watchFile(filePath, cb) {
  var file = (0, _path.resolve)(filePath);
  try {
    (0, _fs.watch)(file, cb);
    console.log('watching', file);
  } catch (e) {
    if (e.errno === 'ENOENT') {
      console.error('Error, no such file', file);
    } else {
      console.error(e);
    }
  }
};

exports.default = watchFile;