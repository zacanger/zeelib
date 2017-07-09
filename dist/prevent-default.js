'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var preventDefault = function preventDefault(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    if (typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
  }
};

exports.default = preventDefault;