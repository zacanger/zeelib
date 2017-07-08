"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * `decodeURI`, but safe
 * @example
 * safeDecodeURI('2!!!!0/,.?+=*^\n|\@@@@') // => '2!!!!0/,.?+=*^\n|@@@@'
 */

var safeDecodeURI = function safeDecodeURI(str) {
  try {
    return decodeURI(str);
  } catch (_) {
    return str;
  }
};

exports.default = safeDecodeURI;