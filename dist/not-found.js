'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

var notFound = function notFound(config) {
  var status = 404;
  var filePath = config;

  return function (req, res) {
    res.writeHead(status, { 'Content-Type': 'text/html' });
    (0, _fs.createReadStream)((0, _path.resolve)(filePath)).pipe(res);
  };
};

exports.default = notFound;