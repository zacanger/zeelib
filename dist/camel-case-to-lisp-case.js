'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a camelCase string and returns one in lisp-case
 * @example
 * camelCaseToLispCase('fooBar') // => 'foo-bar'
 */

var camelCaseToLispCase = function camelCaseToLispCase(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  }).toLowerCase();
};

exports.default = camelCaseToLispCase;