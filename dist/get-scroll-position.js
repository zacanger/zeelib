"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getScrollPosition = function getScrollPosition() {
  return { scrollX: window.scrollX, scrollY: window.scrollY };
};

exports.default = getScrollPosition;