'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove html-like tags from string
 * @example
 * removeTags('<foo>whatver</foo>') // => 'whatever'
 */

var removeTags = function removeTags(str) {
  return str.replace(/(<([^>]+)>)/ig, '');
};

exports.default = removeTags;