'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var head = function head(arr) {
  console.error('`head` is deprecated. Please use `car` instead.');
  return arr[0];
};

exports.default = head;