'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Unescape HTML entities
 * @example
 * unescapeHtml(escapeHtml('<foo>&bar</foo>')) // => '<foo>&bar</foo>'
 */

var unescapeHtml = function unescapeHtml(str /*: string*/) /*: string*/ {
  return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'');
};

exports.default = unescapeHtml;