'use strict';Object.defineProperty(exports,'__esModule',{value:true});// gh:sindresorhus/slash
var fixWindowsSlashes=function fixWindowsSlashes(str){var isExtendedLengthPath=/^\\\\\?\\/.test(str);var hasNonAscii=/[^\x00-\x80]+/.test(str);if(isExtendedLengthPath||hasNonAscii)return str;return str.replace(/\\/g,'/')};exports.default=fixWindowsSlashes;