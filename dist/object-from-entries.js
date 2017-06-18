"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get an object from an array of entries
 * @example
 * objectFromEntries([ [ 'a', 'b' ] ]) // => { a: 'b' }
 */

var objectFromEntries = function objectFromEntries(entries /*: any[]*/) /*: Object*/ {
  var res = {};
  var len = entries.length;
  for (var i = 0; i < len; ++i) {
    var ent = entries[i];
    var key = ent[0];
    var val = ent[1];
    res[key] = val;
  }
  return res;
};

exports.default = objectFromEntries;