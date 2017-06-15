"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a camelCase string and returns one in PascalCase
 */

var camelCaseToPascalCase = function camelCaseToPascalCase(str /*: string*/) /*: string*/ {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = camelCaseToPascalCase;