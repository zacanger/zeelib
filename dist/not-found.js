'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

/**
 * Very simple 404 handler for Node
 * Takes a path to an html file
 * @example
 * notFound('./404.html')
 */

// @flow

var notFound = function notFound(config /*: string*/) {
  var status = 404;
  var filePath = config;

  return function (req /*: Object*/, res /*: Object*/) {
    res.writeHead(status, { 'Content-Type': 'text/html' });
    (0, _fs.createReadStream)((0, _path.resolve)(filePath)).pipe(res);
  };
};

exports.default = notFound;