"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns a timestamp for now
 * @example
 * getNow()
 */

var getNow = function getNow() {
  return Date.now || function () {
    return new Date().getTime();
  };
};

exports.default = getNow;