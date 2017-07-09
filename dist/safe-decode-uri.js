"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var safeDecodeURI = function safeDecodeURI(str) {
  try {
    return decodeURI(str);
  } catch (_) {
    return str;
  }
};

exports.default = safeDecodeURI;