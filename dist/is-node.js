"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isNode = function isNode() {
  return process && !!process.version;
};

exports.default = isNode;