'use strict';Object.defineProperty(exports,'__esModule',{value:true});// credit: gh:egoist/switchy
var noSwitch=function noSwitch(){var conds=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(c){if(typeof conds[c]==='function'){return conds[c]()}else if(typeof conds.default==='function'){return conds.default()}}};exports.default=noSwitch;