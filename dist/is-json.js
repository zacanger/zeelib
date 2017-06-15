"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the string is valid JSON
 */

var isJson = function isJson(str /*: string*/) /*: bool*/ {
  try {
    JSON.parse(str);
    return true;
  } catch (_) {
    return false;
  }
};

exports.default = isJson;