"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Set an attribute on an element
 * @example
 * setAttribute(document.body, 'data-foo', 'bar')
 */

var setAttribute = function setAttribute(el, attr, val) {
  el.setAttribute(attr, val);
};

exports.default = setAttribute;