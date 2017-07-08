'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Unescape HTML entities
 * @example
 * unescapeHtml(escapeHtml('<foo>&bar</foo>')) // => '<foo>&bar</foo>'
 */

var unescapeHtml = function unescapeHtml(str) {
  return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'');
};

exports.default = unescapeHtml;