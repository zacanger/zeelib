"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var camelCaseToPascalCase = function camelCaseToPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = camelCaseToPascalCase;