'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

/**
 * Read json file, parse it, call cb with obj or err
 */

var readJson = function readJson(file /*: string*/, cb /*: any*/) /*: ?any*/ {
  (0, _fs.readFile)(file, 'utf8', function (err, json) {
    if (err) {
      cb(err);
      return;
    }
    var data = void 0;
    try {
      data = JSON.parse(json);
    } catch (e) {
      cb(e);
      return;
    }
    cb(null, data);
  });
}; // @flow

exports.default = readJson;