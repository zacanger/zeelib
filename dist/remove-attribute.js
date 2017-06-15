"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove an attribute from an element
 */

var removeAttribute = function removeAttribute(el /*: HTMLElement*/, attr /*: string*/) /*: void*/ {
  el.removeAttribute(attr);
};

exports.default = removeAttribute;