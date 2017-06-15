'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

/*
 * `basename` for Node
 */

var getBasename = function getBasename(str /*: string*/) /*: string*/ {
  return (0, _path.parse)(str).base;
}; // @flow

exports.default = getBasename;