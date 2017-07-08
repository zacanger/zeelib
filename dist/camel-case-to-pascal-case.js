"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a camelCase string and returns one in PascalCase
 * @example
 * camelCaseToPascalCase('fooBar') // => 'FooBar'
 */

var camelCaseToPascalCase = function camelCaseToPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = camelCaseToPascalCase;