'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

function inherits(a /*: any*/, b /*: any*/) /*: any*/ {
  console.error('`inherits` is deprecated.');
  function c() {}
  c.prototype = b.prototype;
  a.prototype = new c(); // eslint-disable-line
}

exports.default = inherits;