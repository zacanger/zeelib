'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Returns array of all locally installed
 * Node modules
 * @example
 * getNodeModules()
 */

var getNodeModules = function getNodeModules() /*: string[]*/ {
  return (0, _fs.readdirSync)('node_modules').filter(function (n) {
    return n !== '.bin';
  });
}; // @flow

exports.default = getNodeModules;