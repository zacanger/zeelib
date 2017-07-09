'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var writeJson = function writeJson(file, data) {
  var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var cb = arguments[3];

  if (typeof cb !== 'function') {
    cb = indent;
    indent = 0;
  }
  var json = void 0;
  try {
    json = JSON.stringify(data, null, indent);
  } catch (e) {
    cb(e);
    return;
  }
  (0, _fs.writeFile)(file, json, 'utf8', cb);
};

exports.default = writeJson;