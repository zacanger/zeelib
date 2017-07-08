'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Escapes a string for use in XPath
 * @example
 * escapeForXpath('asdf lask jf((slkfjf ') // => 'concat(\'asdf lask jf((slkfjf \')'
 */

var escapeForXpath = function escapeForXpath(str) {
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