"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isBuffer = function isBuffer(a) {
  try {
    return Buffer.isBuffer(a);
  } catch (_) {
    return false;
  }
};

exports.default = isBuffer;