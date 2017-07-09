'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _net = require('net');

var findPort = function findPort(port, cb) {
  var server = (0, _net.createServer)(function () {});
  var onListen = function onListen() {
    server.removeListener('error', onError);
    server.close();
    cb(null, port);
  };
  var onError = function onError(err) {
    server.removeListener('listening', onListen);
    if (err.code !== ('EADDRINUSE' || 'EACCESS')) {
      return cb(err);
    }
    findPort(port + 1, cb);
  };
  server.once('error', onError);
  server.once('listening', onListen);
  server.listen(port);
};

exports.default = findPort;