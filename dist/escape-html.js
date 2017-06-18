'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Escapes HTML with entities
 * @example
 * escapeHtml('<span>"&</span>\'') // => '&lt;span&gt;&quot;&amp;&lt;/span&gt;&#39;'
 */

var escapeHtml = function escapeHtml(str /*: string*/) /*: string*/ {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};

exports.default = escapeHtml;