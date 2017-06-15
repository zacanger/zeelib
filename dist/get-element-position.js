'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes an element and returns its x/y position
 */

/*:: type p = {
  x: number,
  y: number
}*/
var getElementPosition = function getElementPosition(el /*: any*/) /*: p*/ {
  var x = 0;
  var y = 0;

  while (el) {
    if (el.tagName === 'BODY') {
      var xScroll = el.scrollLeft || document && document.documentElement && document.documentElement.scrollLeft || 0;

      var yScroll = el.scrollTop || document && document.documentElement && document.documentElement.scrollTop || 0;

      x += el.offsetLeft - xScroll + el.clientLeft;
      y += el.offsetTop - yScroll + el.clientTop;
    }
    el = el.offsetParent;
  }

  return { x: x, y: y };
};

exports.default = getElementPosition;