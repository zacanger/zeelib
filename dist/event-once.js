"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var eventOnce = function eventOnce(el, t, handler) {
  var f = function f(e) {
    e.target.removeEventListener(t, f);
    handler();
  };
  el.addEventListener(t, f);
};

exports.default = eventOnce;