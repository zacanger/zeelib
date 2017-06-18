"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Find out how many of a matching element is on the page
 * If second param is truthy, will look by classname instead of tagname
 * @example
 * getLengthOfElements('span') // => number
 * getLengthOfElements('btn-whatever', true) // => number
 */

var getLengthOfElements = function getLengthOfElements(element /*: string*/, useClassnames /*: ?bool*/) /*: number*/ {
  return document && useClassnames ? document.getElementsByClassName(element).length : document.getElementsByTagName(element).length;
};

exports.default = getLengthOfElements;