'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isGeneratorFunction = function isGeneratorFunction(v) {
  return v && v.constructor && v.constructor.name === 'GeneratorFunction';
};

exports.default = isGeneratorFunction;