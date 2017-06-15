"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * From lisp-case to camelCase
 */

var lispCaseToCamelCase = function lispCaseToCamelCase(str /*: string*/) /*: string*/ {
  return str.toLowerCase().replace(/-[a-z]/g, function (match) {
    return match.slice(1).toUpperCase();
  });
};

exports.default = lispCaseToCamelCase;