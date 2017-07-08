'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a camelCase string and returns one in snake_case
 * @example
 * camelCaseToSnakeCase('fooBar') // => 'foo_bar'
 */

var camelCaseToSnakeCase = function camelCaseToSnakeCase(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '_' + match.toLowerCase();
  }).toLowerCase();
};

exports.default = camelCaseToSnakeCase;