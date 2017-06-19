"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get a nicely-formatted time string
 * @returns {string} '[hh:mm:ss]'
 * @example
 * getNiceTime()
 */

var getNiceTime = function getNiceTime() {
  return "[" + Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1] + "]";
};

exports.default = getNiceTime;