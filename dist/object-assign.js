'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var objectAssign = Object.assign || function (target /*: Object*/, source /*: Object*/) /*: Object*/ {
  console.error('`objectAssign` is deprecated. Please use `Object.assign` instead.');
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
};

exports.default = objectAssign;