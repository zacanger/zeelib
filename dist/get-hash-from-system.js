'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var _crypto = require('crypto');

var getHashFromSystem = function getHashFromSystem() {
  var p = [(0, _os.hostname)(), process.pid, +new Date()];
  var h = (0, _crypto.createHash)('md5').update(p.join(''));
  return h.digest('hex');
};

exports.default = getHashFromSystem;