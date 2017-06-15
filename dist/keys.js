'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var keys = Object.keys || function (obj /*: Object*/) /*: any[]*/ {
  console.error('`keys` is deprecated. Please use `Object.keys` instead.');
  var r = [];
  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      r.push(i);
    }
  }
  return r;
};

exports.default = keys;