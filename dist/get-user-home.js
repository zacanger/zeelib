'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var _process = process,
    env = _process.env;


var getUserHome = function getUserHome() {
  return env.HOME || env.USERPROFILE || (0, _os.homedir)() || env.HOMEDRIVE && env.HOMEPATH && env.HOMEDRIVE + env.HOMEPATH || '';
};

exports.default = getUserHome;