"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable max-len */
// @flow

/**
 * Returns true if RegExp is valid
 */

var isValidRegex = function isValidRegex(v /*: any*/) /*: bool*/ {
  return (/^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/.test(v)
  );
};

exports.default = isValidRegex;