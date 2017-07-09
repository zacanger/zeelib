"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getLengthOfElements = function getLengthOfElements(element, useClassnames) {
  return document && useClassnames ? document.getElementsByClassName(element).length : document.getElementsByTagName(element).length;
};

exports.default = getLengthOfElements;