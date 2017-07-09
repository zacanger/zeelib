"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getWidth = function getWidth() {
  return window.innerWidth || window.document.documentElement.clientWidth;
};

exports.default = getWidth;