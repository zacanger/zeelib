'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// @flow

/**
 * Roughly turn CSS into JSON
 */

var cssToJson = function cssToJson(str /*: string*/) /*: string*/ {
  return str.replace(/(\w*:)/g, '$1"').replace(/[;]/g, '";').replace(/(\'{2,})/g, '"').replace(/;/g, ',').replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g, '"$2": ').replace(/,\s*\}/, '}').trim();
};

exports.default = cssToJson;