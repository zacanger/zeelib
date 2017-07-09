'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var snakeCaseToLispCase = function snakeCaseToLispCase(str) {
  return str.replace(/_/g, '-');
};

exports.default = snakeCaseToLispCase;