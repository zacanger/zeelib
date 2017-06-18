'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getIsNode = function getIsNode() {
  console.error('`getIsNode` is deprecated. Please use `isNode`.');
  return process && !!process.version;
};

exports.default = getIsNode;