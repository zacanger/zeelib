'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Collapses consecutive whitespace to a single space
 */

var collapseWhitespace = function collapseWhitespace(str /*: string*/) /*: string*/ {
  return str.replace(/\s+/g, ' ');
};

exports.default = collapseWhitespace;