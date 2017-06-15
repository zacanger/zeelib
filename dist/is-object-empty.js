'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isObjectEmpty = function isObjectEmpty(obj) {
  console.error('`isObjectEmpty` is deprecated. Please use `isEmpty` instead.');
  return obj.constructor === Object && Object.keys(obj).length === 0;
};

exports.default = isObjectEmpty;