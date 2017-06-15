"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Simple `throttle` implementation
 * @param {function} f to throttle
 * @param {number} wait ms
 * @param {boolean} lead optional, defaults to false
 * @param {boolean} trail, optional, defaults to false
 * @returns {any} result
 */

function throttle(f, wait) {
  var lead = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var trail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var ctx = void 0;
  var args = void 0;
  var res = void 0;
  var timeout = null;
  var prev = 0;

  var later = function later() {
    prev = lead === false ? 0 : Date.now();
    timeout = null;
    res = f.apply(ctx, args);
    if (!timeout) {
      ctx = args = null;
    }
  };

  return function () {
    var now = Date.now();
    if (!prev && lead === false) {
      prev = now;
    }
    var remain = wait - (now - prev);
    ctx = this;
    args = arguments;
    if (remain <= 0 || remain > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      prev = now;
      res = f.apply(ctx, args);
      if (!timeout) {
        ctx = args = null;
      }
    } else if (!timeout && trail !== false) {
      timeout = setTimeout(later, remain);
    }

    return res;
  };
}

exports.default = throttle;