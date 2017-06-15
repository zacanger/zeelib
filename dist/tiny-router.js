'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var tinyRouter = function tinyRouter(pathname, response) {
  console.error('`tinyRouter` is deprecated.');
  var html = void 0,
      filePath = void 0;
  if (pathname !== '/favicon.ico') {
    try {
      filePath = './' + pathname;
      console.log('loading ' + filePath);
      html = (0, _fs.readFileSync)(filePath);
      response.write(html);
      response.end();
    } catch (err) {
      console.warn('unable to load ' + filePath);
      response.end();
    }
  }
};

exports.default = tinyRouter;