"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Debounce. Takes a function, a wait (ms), and optionally a truthy immediate param
 */

function debounce(f /*: () => any*/, wait /*: number*/) /*: any*/ {
  var immediate /*: bool*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var timeout = null;
  return function () {
    var ctx = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) {
        f.apply(ctx, args);
      }
    };

    var now = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (now) {
      f.apply(ctx, args);
    }
  };
}

exports.default = debounce;