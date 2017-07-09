"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var safeDecodeURIComponent = function safeDecodeURIComponent(str) {
  try {
    return decodeURIComponent(str);
  } catch (_) {
    return str;
  }
};

exports.default = safeDecodeURIComponent;