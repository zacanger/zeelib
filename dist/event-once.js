"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Runs an event handler once
 * @example
 * const el = document.getElementById('foo')
 * eventOnce(el, 'logger', console.log)
 */

var eventOnce = function eventOnce(el, t, handler) {
  var f = function f(e) {
    e.target.removeEventListener(t, f);
    handler();
  };
  el.addEventListener(t, f);
};

exports.default = eventOnce;