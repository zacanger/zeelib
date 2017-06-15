'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// @flow

/**
 * Strip punctuation from string
 */

var stripPunctuation = function stripPunctuation(str /*: string*/) /*: string*/ {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
};

exports.default = stripPunctuation;