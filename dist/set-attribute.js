"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Set an attribute on an element
 */

var setAttribute = function setAttribute(el /*: HTMLElement*/, attr /*: string*/, val /*: string*/) /*: void*/ {
  el.setAttribute(attr, val);
};

exports.default = setAttribute;