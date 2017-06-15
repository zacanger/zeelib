'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Write JSON from a stringifiable value, sync
 */

var writeJsonSync = function writeJsonSync(file /*: string*/, data /*: any*/) /*: void*/ {
  var indent /*: ?number*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  if (typeof indent !== 'number') {
    indent = 0;
  }
  (0, _fs.writeFileSync)(file, JSON.stringify(data, null, indent), 'utf8');
}; // @flow

exports.default = writeJsonSync;