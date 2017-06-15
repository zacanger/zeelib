"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Runs an event handler once
 */

var eventOnce = function eventOnce(el /*: HTMLElement*/, t /*: string*/, handler /*: () => any*/) /*: void*/ {
  var f = function f(e /*: Event*/) /*: void*/ {
    e.target.removeEventListener(t, f);
    handler();
  };
  el.addEventListener(t, f);
};

exports.default = eventOnce;