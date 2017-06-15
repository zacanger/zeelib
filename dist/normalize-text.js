'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Normalizes text
 */

var normalizeText = function normalizeText(text /*: string*/) /*: string*/ {
  var m = text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig);
  return m ? m.join(' ') : '';
};

exports.default = normalizeText;