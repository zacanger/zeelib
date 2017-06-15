'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove html-like tags from string
 */

var removeTags = function removeTags(str /*: string*/) /*: string*/ {
  return str.replace(/(<([^>]+)>)/ig, '');
};

exports.default = removeTags;