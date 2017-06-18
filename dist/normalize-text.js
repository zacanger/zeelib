'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Normalizes text
 * @example
 * normalizeText('Asdf 0  0----  ') // => 'asdf 0 0'
 */

var normalizeText = function normalizeText(text /*: string*/) /*: string*/ {
  var m = text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig);
  return m ? m.join(' ') : '';
};

exports.default = normalizeText;