'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable max-len */
// @flow

var isValidRegex = function isValidRegex(v /*: any*/) /*: bool*/ {
  console.error('`isValidRegex` is deprecated.');
  return (/^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/.test(v)
  );
};

exports.default = isValidRegex;