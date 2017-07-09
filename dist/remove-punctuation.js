'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removePunctuation = function removePunctuation(str) {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
};

exports.default = removePunctuation;