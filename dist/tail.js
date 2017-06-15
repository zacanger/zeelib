'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var tail = function tail(arr /*: any[]*/) /*: any*/ {
  console.error('`tail` is deprecated. Please use `cdr` instead.');
  return arr.slice(1);
};

exports.default = tail;