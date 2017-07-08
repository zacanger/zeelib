"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove an attribute from an element
 * @example
 * removeAttribute(document.getElementById('foo'), 'data-something')
 */

var removeAttribute = function removeAttribute(el, attr) {
  el.removeAttribute(attr);
};

exports.default = removeAttribute;