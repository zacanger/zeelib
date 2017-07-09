'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getRegexFlags = function getRegexFlags(r) {
  var flags = [];
  if (r.global) flags.push('g');
  if (r.ignoreCase) flags.push('i');
  if (r.multiline) flags.push('m');
  if (r.unicode) flags.push('u');
  if (r.sticky) flags.push('y');
  return flags;
};

exports.default = getRegexFlags;