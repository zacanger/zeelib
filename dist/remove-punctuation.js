'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// @flow

/**
 * Remove punctuation from string
 * @example
 * removePunctuation('asdf. as.f.sdaf .') // => 'asdf asfsdaf '
 */

var removePunctuation = function removePunctuation(str /*: string*/) /*: string*/ {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
};

exports.default = removePunctuation;