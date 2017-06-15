'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Escapes a string for use in XPath
 */

var escapeForXpath = function escapeForXpath(str /*: string*/) /*: ?string*/ {
  var parts = str.match(/[^'"]+|['"]/g);
  if (parts) {
    parts = parts.map(function (part) {
      if (part === "'") {
        return '"\'"';
      }

      if (part === '"') {
        return "'\"'";
      }

      return '\'' + part + '\'';
    });

    return 'concat(' + parts.join(',') + ')';
  }
};

exports.default = escapeForXpath;