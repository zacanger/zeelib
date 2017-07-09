'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var camelCaseToLispCase = function camelCaseToLispCase(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  }).toLowerCase();
};

exports.default = camelCaseToLispCase;