"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes an element and retuns its offset from top left
 * @example
 * getElementOffset(document.getElementById('foo')) // => { top: number, left: number }
 */

/*:: type t = {
  top: number,
  left: number
}*/
var getElementOffset = function getElementOffset(el /*: HTMLElement*/) /*: t*/ {
  var r = el.getBoundingClientRect();
  var d = document.documentElement;
  var w = window;
  var top = r.top + w.pageYOffset - (d && d.clientTop || 0);
  var left = r.left + w.pageXOffset - (d && d.clientLeft || 0);
  return { top: top, left: left };
};

exports.default = getElementOffset;