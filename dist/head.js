'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var head = function head(arr /*: any[]*/) /*: any*/ {
  console.error('`head` is deprecated. Please use `car` instead.');
  return arr[0];
};

exports.default = head;