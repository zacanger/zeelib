"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var sleep = function sleep(ms) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < ms) {}
};

exports.default = sleep;