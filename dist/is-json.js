"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isJson = function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (_) {
    return false;
  }
};

exports.default = isJson;