'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var lispCaseToSnakeCase = function lispCaseToSnakeCase(str) {
  return str.replace(/-/g, '_');
};

exports.default = lispCaseToSnakeCase;