"use strict";Object.defineProperty(exports,"__esModule",{value:true});// is num power of two
var isPow2=function isPow2(n){return 1<<n.toString(2).length-1===n};exports.default=isPow2;