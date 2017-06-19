"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * snake_case to camelCase
 * @example
 * snakeCaseToCamelCase('foo_bar') // => 'fooBar'
 */

var snakeCaseToCamelCase = function snakeCaseToCamelCase(str /*: string*/) /*: string*/ {
  return str.replace(/(_\w)/g, function (match) {
    return match[1].toUpperCase();
  });
};

exports.default = snakeCaseToCamelCase;