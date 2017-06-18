"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Runs an event handler once
 * @example
 * const el = document.getElementById('foo')
 * eventOnce(el, 'logger', console.log)
 */

var eventOnce = function eventOnce(el /*: HTMLElement*/, t /*: string*/, handler /*: () => any*/) /*: void*/ {
  var f = function f(e /*: Event*/) /*: void*/ {
    e.target.removeEventListener(t, f);
    handler();
  };
  el.addEventListener(t, f);
};

exports.default = eventOnce;