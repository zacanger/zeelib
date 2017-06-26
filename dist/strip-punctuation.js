'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// @flow

var stripPunctuation = function stripPunctuation(str /*: string*/) /*: string*/ {
  console.error('`stripPunctuation` is deprecated. Use `removePunctuation`.');
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
};

exports.default = stripPunctuation;